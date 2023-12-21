import { useContext, useState } from "react";
import { UserContext } from "../shared/context";
import axios from "axios";
import { socket } from "../shared/socket";

function Input(props) {
    let {setMessageContent,email,receiver,username} = useContext(UserContext);
    let [input,setInput] = useState('');
    let token = localStorage.getItem("token");

    let sendHandler = (e)=>{
        setMessageContent(input)
        axios.post("https://chat-backend-8dvr.onrender.com/messages/addMessage",{sender:email,receiver:receiver,text:input},{
            headers:{
                Authorization:`Basic ${token}`
            }
        }).catch((err)=>{
            console.log(err);
        })
        document.getElementById('messageInput').value = ''
        props.scroll();
        let room = (username>receiver)?username+receiver:receiver+username;
        socket.emit('message',room,input,username);
    }

    let inputHandler = (e)=>{
        setInput(e.target.value)
    }

    return ( 
        <div className="Input">
            <input className="messageInput" type="text" name="messageInput" id="messageInput" placeholder="Type something..." onChange={inputHandler} />
            <button className="send" onClick={sendHandler}>Send</button>
        </div>
     );
}

export default Input;