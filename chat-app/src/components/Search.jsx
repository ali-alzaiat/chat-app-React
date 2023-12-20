import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
    let [searchValue,setSearchValue] = useState("");
    let [searchResult,setSearchResult] = useState([]);
    let searchHandler = (e)=>{
        setSearchValue(e.target.value);
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/user/getUser/${searchValue}`)
        .then((response)=>{
            setSearchResult(response.data);
        }).catch((err)=>{
            setSearchResult([]);
            console.log(err)
        })
    },[searchValue])
    return ( 
        <div className="search">
            <div className="input-form">
                <input type="text" name="search" id="search" placeholder="Search for a user" onChange={searchHandler}/>
            </div>
            {searchResult.map((v)=>{
                return (<div className="result">
                <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" alt="" />
                <span className="userName">{v.name}</span>
            </div>)
            })}
        </div>
     );
}

export default Search;