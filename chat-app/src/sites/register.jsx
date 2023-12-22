import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    let[username,setUsername] = useState('');
    let[password,setpassword] = useState('');
    let[email,setemail] = useState('');
    let navegator = useNavigate();
    function addUser() {
        axios.post('https://chat-backend-8dvr.onrender.com/user/signup',{"name":username,"password":password,"email":email})
        .then((data)=>{
            navegator('/login')
        }).catch((err)=>{
            if(err.response.status === 400){
                alert("Email already exists");
            }else{
                console.log(err);
                alert("error")
            }
        })
    }
    return ( 
        <div className="container">
            <div className="card">
                <span className="title"><h1>Chat registration</h1></span>
                <div className="form-container">
                    <input type="text" name="userName" id="userName" placeholder="Enter your name." onChange={(e)=>{setUsername(e.target.value)}} />
                    <input type="email" name="email" id="email" placeholder="Enter your email address" onChange={(e)=>{setemail(e.target.value)}} />
                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}} />
                    <input type="file" name="image" id="image" className="image" />
                    <label htmlFor="image">
                        <img src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" />
                        Choose your avatar.
                    </label>
                    <button type="submit" onClick={addUser}>Sign Up</button>
                </div>
                <span className="footer">Already singed up? <a href="/login">Login</a></span>
            </div>
        </div>
     );
}

export default Register;