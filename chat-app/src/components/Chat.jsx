import Messages from "./Messages";
import Input from "./Input";
import { useContext, useRef } from "react";
import { UserContext } from "../shared/context";

function Chat() {
    let {receiverName} = useContext(UserContext);
    const chatMessagesRef = useRef(null);

    let inputHandler = ()=>{
        if(chatMessagesRef.current){
            chatMessagesRef.current.scrollToBottom();
        }
    }

    return ( 
        <div className="chatMessages" id="chatMessages">
            <div className="chatTop">
                <span>{(receiverName)?receiverName:''}</span>
            </div>
            <Messages ref={chatMessagesRef}/>
            <Input scroll={inputHandler}/>
        </div>
     );
}

export default Chat;