import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import axios from "axios";
import { UserContext } from "../shared/context";

function Messages() {
    let {username,receiver} = useContext(UserContext);
    let [messageslist,setMessageslist] = useState([]);
    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(receiver){
            axios.get(`http://localhost:8000/messages/getMessage/${username}/${receiver}`,{
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
    return ( 
        <div className="messages">
            {messageslist.map((message)=>{
                return (<Message message={message} key={message._id}/>)
            })}
        </div>
     );
}

export default Messages;