function Register() {
    return ( 
        <div className="container">
            <div className="card">
                <span className="title"><h1>Chat registration</h1></span>
                <div className="form-container">
                    <input type="text" name="userName" id="userName" placeholder="Enter your name." />
                    <input type="email" name="email" id="email" placeholder="Enter your email address" />
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <input type="file" name="image" id="image" className="image" />
                    <label htmlFor="image">
                        <img src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" />
                        Choose your avatar.
                    </label>
                    <button type="submit">Sign Up</button>
                </div>
                <span className="footer">Already singed up? Login</span>
            </div>
        </div>
     );
}

export default Register;