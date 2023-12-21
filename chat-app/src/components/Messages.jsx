import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import Message from "./Message";
import axios from "axios";
import { UserContext } from "../shared/context";
import { socket } from "../shared/socket";

let Messages = forwardRef((props,ref)=>{
    let {username,receiver,messageContent} = useContext(UserContext);
    let [messageslist,setMessageslist] = useState([]);
    const chatMessagesRef = useRef(null);

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(receiver){
            axios.get(`https://chat-backend-8dvr.onrender.com/messages/getMessage/${username}/${receiver}`,{
                headers:{
                    Authorization:`Basic ${token}`
                }
            }).then((messages)=>{
                setMessageslist(messages.data.messages);
            }).catch((err)=>{
                console.log(err);
            })
        }
    },[username,receiver])

    useEffect(()=>{
        if(messageContent){
            let newMessage = {_id:new Date().toISOString(),content:messageContent,timestamp:new Date().toISOString(),sender:{name:username}};
            setMessageslist([...messageslist,newMessage]);
        }
    },[messageContent]);
    
    useImperativeHandle(ref,()=>{
        scrollToBottom()
    })

    const scrollToBottom = () => {
        if(chatMessagesRef.current){
            chatMessagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };

    socket.on("message",(message,userName)=>{
        let newMessage = {_id:new Date().toISOString(),content:message,timestamp:new Date().toISOString(),sender:{name:userName}};
        setMessageslist([...messageslist,newMessage]);
    })

    return ( 
        <div className="messages">
            {messageslist.map((message)=>{
                return (<Message message={message} key={message._id}/>)
            })}
            <div ref={chatMessagesRef}></div>
        </div>
     );
})

export default Messages;