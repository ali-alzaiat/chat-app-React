import Message from "./Message";

function Messages() {
    return ( 
        <div className="messages">
            <Message owner="true" />
            <Message />
            <Message />
            <Message owner="true" />
            <Message />
            <Message />
        </div>
     );
}

export default Messages;