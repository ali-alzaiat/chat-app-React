import { useContext } from "react";
import { UserContext } from "../shared/context";

function Message(props) {
    let time = props.message.timestamp.split('T')[1].substring(0,5);
    let date = props.message.timestamp.split('T')[0]
    let {username} = useContext(UserContext);
    return(
        <div className={"message "+((props.message.sender.name === username)?'owner':'')}>
            <div className="messageInfo">
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <span>{time}</span>
            </div>
            <div className="messageContent">
                <span>{(props.message.sender.name !== username)?props.message.sender.name+': ':''}{props.message.content}</span>
            </div>
        </div>
    );
}

export default Message;