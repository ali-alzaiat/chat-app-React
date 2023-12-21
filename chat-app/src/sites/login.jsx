import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let[username, setUsername] = useState(''); 
    let[password, setpassword] = useState(''); 
    let navigate = useNavigate();

    function loginHandler(){
        axios.get(`https://chat-backend-8dvr.onrender.com/user/login/${username}/${password}`)
        .then((response) => {
            localStorage.setItem("token",response.data); 
            navigate('/');        
        }).catch(err=>{
            if(err.response.status === 401){
                alert("'Login failed: Unauthorized'")
            }else{
                console.log(err);
            }
        })
    }

    return ( 
        <div className="container">
            <div className="card">
                <span className="title" ><h1 style={{textAlign: "center"}}>Login</h1></span>
                <div className="form-container">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" onChange={(e)=>{setUsername(e.target.value)}} />
                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}} />
                    <button type="submit" onClick={loginHandler}>Login</button>
                </div>
                <span className="footer">Don't have an account? <a href="/register">Sign up</a></span>
            </div>
        </div>
     );
}

export default Login;