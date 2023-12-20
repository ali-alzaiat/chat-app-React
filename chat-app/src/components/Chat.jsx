import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { UserContext } from "../shared/context";

function Chat() {
    let {username} = useContext(UserContext);
    return ( 
        <div className="chatMessages">
            <div className="chatTop">
                <span>{username}</span>
            </div>
            <Messages />
            <Input />
        </div>
     );
}

export default Chat;