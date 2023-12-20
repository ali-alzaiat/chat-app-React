import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../shared/context";

function Top() {
    let {username} = useContext(UserContext);
    let navigate = useNavigate();
    function logoutHandler(){
        localStorage.removeItem("token");
        navigate("login");
    }
    return ( 
        <div className="top">
            <div className="title">Chat</div>
            <div className="user">
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <span>{username}</span>
                <button onClick={logoutHandler}>logout</button>
            </div>
        </div>
     );
}

export default Top;