import { useNavigate } from "react-router-dom";

function Top() {
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
                <span>Ali Alzaiat</span>
                <button onClick={logoutHandler}>logout</button>
            </div>
        </div>
     );
}

export default Top;