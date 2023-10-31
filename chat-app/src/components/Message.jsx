function Message(props) {
    return(
        <div className={"message "+((props.owner)?'owner':'')}>
            <div className="messageInfo">
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <span>hello hi hih ihi hi hi hh  k nams asakdlk</span>
            </div>
        </div>
    );
}

export default Message;