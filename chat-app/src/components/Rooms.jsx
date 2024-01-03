import { useContext, useState, useEffect } from "react";
import { UserContext } from "../shared/context";
import axios from "axios";
import { socket } from "../shared/socket";

function Rooms() {
    let [chats,setChats] = useState([]);
    let {username,email,setReceiver,setReceiverName} = useContext(UserContext);
    useEffect(()=>{
        let token = localStorage.getItem('token');
        axios.get(`https://chat-backend-8dvr.onrender.com/messages/getMyMessage/${email}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
        .then((response)=>{
            setChats(response.data.messages);
        }).catch((err)=>{
            console.log(err)
        })
    },[email])

    let recevierHandler = (e)=>{
        const selectedUser = e.currentTarget.getAttribute('value');
        setReceiver(selectedUser);
        setReceiverName(e.currentTarget.getAttribute('receiver'));
        let room = (email>selectedUser)?email+selectedUser:selectedUser+email;
        socket.emit('user-connected',room,username)
    }

    return ( 
        <div className="rooms">
            {chats.map((v)=>{
                return (<div className="chat" key={(v.sender === email)?v.receiver:v.sender} value={(v.sender === email)?v.receiver:v.sender} receiver={(v.sender === email)?v.receiverName:v.senderName} onClick={recevierHandler}>
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <div className="chat-info">
                    <span className="userName">{(v.senderName === username)?v.receiverName:v.senderName}</span>
                    <p className="last-message">{v.content}</p>
                </div>
            </div>)
            })}
        </div>
     );
}

export default Rooms;