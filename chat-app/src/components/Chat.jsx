import Messages from "./Messages";
import Input from "./Input";

function Chat() {
    return ( 
        <div className="chatMessages">
            <div className="chatTop">
                <span>Ali</span>
            </div>
            <Messages />
            <Input />
        </div>
     );
}

export default Chat;