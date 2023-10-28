function Input() {
    return ( 
        <div className="Input">
            <input className="messageInput" type="text" name="messageInput" id="messageInput" placeholder="Type something..." />
            <button className="send">Send</button>
        </div>
     );
}

export default Input;