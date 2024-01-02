import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useContext } from "react";
import { UserContext } from "../shared/context";

function Main() {
    let {hide,setHide} = useContext(UserContext);

    let closeSidebar =() =>{
        setHide(true);
    }

    return ( 
        <div className="main">
            {!hide && <Sidebar />}
            <Chat />
            {!hide && <div className="overlay" onClick={closeSidebar}></div>}
        </div>
     );
}

export default Main;