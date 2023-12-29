import Messages from "./Messages";
import Input from "./Input";
import { useContext, useRef } from "react";
import { UserContext } from "../shared/context";
import "./Chat.css"

function Chat() {
    let {receiverName,setHide,hide} = useContext(UserContext);
    const chatMessagesRef = useRef(null);

    let inputHandler = ()=>{
        if(chatMessagesRef.current){
            chatMessagesRef.current.scrollToBottom();
        }
    }

    let show = (e)=>{
        setHide(false)
    }

    return ( 
        <div className="chatMessages" id="chatMessages">
            <div className="chatTop">
            {hide?<button className="showButton" onClick={show}>{'>'}</button>:null}
                <span>{(receiverName)?receiverName:''}</span>
            </div>
            <Messages ref={chatMessagesRef}/>
            <Input scroll={inputHandler}/>
        </div>
     );
}

export default Chat;