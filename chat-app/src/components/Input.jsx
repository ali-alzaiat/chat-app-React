import { useContext, useState } from "react";
import { UserContext } from "../shared/context";
import axios from "axios";

function Input() {
    let {setMessageContent,email,receiver} = useContext(UserContext);
    let [input,setInput] = useState('');
    let token = localStorage.getItem("token");

    let sendHandler = (e)=>{
        setMessageContent(input)
        axios.post("http://localhost:8000/messages/addMessage",{sender:email,receiver:receiver,text:input},{
            headers:{
                Authorization:`Basic ${token}`
            }
        }).catch((err)=>{
            console.log(err);
        })
        document.getElementById('messageInput').value = ''
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