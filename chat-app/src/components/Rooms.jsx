import { useContext, useState, useEffect } from "react";
import { UserContext } from "../shared/context";
import axios from "axios";

function Rooms() {
    let [chats,setChats] = useState([]);
    let {username,setReceiver} = useContext(UserContext);
    let token = localStorage.getItem('token');
    useEffect(()=>{
        axios.get(`http://localhost:8000/messages/getMyMessage/${username}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
        .then((response)=>{
            setChats(response.data.messages);
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    let recevierHandler = (e)=>{
        const selectedUser = e.currentTarget.getAttribute('value');
        setReceiver(selectedUser);
    }

    return ( 
        <div className="rooms">
            {chats.map((v)=>{
                return (<div className="chat" key={(v.sender === username)?v.receiver:v.sender} value={(v.sender === username)?v.receiver:v.sender} onClick={recevierHandler}>
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <div className="chat-info">
                    <span className="userName">{(v.sender === username)?v.receiver:v.sender}</span>
                    <p className="last-message">{v.content}</p>
                </div>
            </div>)
            })}
        </div>
     );
}

export default Rooms;