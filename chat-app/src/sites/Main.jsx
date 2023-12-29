import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useContext } from "react";
import { UserContext } from "../shared/context";

function Main() {
    let {hide} = useContext(UserContext);
    return ( 
        <div className="main">
            {hide?null:<Sidebar />}
            <Chat />
        </div>
     );
}

export default Main;