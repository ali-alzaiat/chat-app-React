import axios from 'axios';
import { useState } from 'react';

function Login() {
    let[username, setUsername] = useState(''); 
    let[password, setpassword] = useState(''); 

    function loginHandler(){
        axios.get('')
        .then((token) => {
            localStorage.setItem("token",token);
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