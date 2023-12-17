import { Outlet, Navigate } from "react-router-dom";

export default function Guard(){
    let isLogedin = false;
    if(! isLogedin){
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}