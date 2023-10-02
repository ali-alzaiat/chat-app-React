import Top from "./Top";
import Search from "./Search";
import Rooms from "./Rooms";

function Sidebar() {
    return ( 
        <div className="sidebar">
            <Top />
            <Search />
            <Rooms />
        </div>
     );
}

export default Sidebar;