function Login() {
    return ( 
        <div className="container">
            <div className="card">
                <span className="title" ><h1 style={{textAlign: "center"}}>Login</h1></span>
                <div className="form-container">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" />
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <button type="submit">Login</button>
                </div>
                <span className="footer">Don't have an account? Sign up</span>
            </div>
        </div>
     );
}

export default Login;