import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../shared/context";
import { socket } from "../shared/socket";

function Search() {
    let [searchValue,setSearchValue] = useState("");
    let [searchResult,setSearchResult] = useState([]);
    let {setReceiver,username,setReceiverName} = useContext(UserContext);
    useEffect(()=>{
        if(!searchValue){
            setSearchResult([]);
            return;
        }
        let token = localStorage.getItem('token');
        axios.get(`https://chat-backend-8dvr.onrender.com/user/getUser/${searchValue}`, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
        .then((response)=>{
            setSearchResult(response.data);
        }).catch((err)=>{
            setSearchResult([]);
            console.log(err)
        })
    },[searchValue])

    let searchHandler = (e)=>{
        setSearchValue(e.target.value);
    }

    let recevierHandler = (e)=>{
        const selectedUser = e.currentTarget.getAttribute('value');
        setReceiver(selectedUser);
        setReceiverName(e.currentTarget.getAttribute('result'));
        let room = (username>selectedUser)?username+selectedUser:selectedUser+username;
        socket.emit('user-connected',room,username)
    }

    return ( 
        <div className="search">
            <div className="input-form">
                <input type="text" name="search" id="search" placeholder="Search for a user" onChange={searchHandler}/>
            </div>
            {searchResult.map((v)=>{
                return (<div className="result" key={v.email} value={v.email} result={v.name} onClick={recevierHandler}>
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <span className="userName">{v.name}</span>
            </div>)
            })}
        </div>
     );
}

export default Search;