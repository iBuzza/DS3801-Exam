import React from 'react';
import '../../css/Login.css';

const Login = () => {
  const imgPath = require("../../img/app_POS/logo.png");
  return(
    <div className="loginpage">
      <img className="loginpage" id="logo" src={imgPath} />
      <h1 className="loginpage" id="Logo">iCafé</h1>
      <label className="loginpage" id="unameLabel">USERNAME</label> <br />
      <input className="loginpage" id="uname" placeholder="Username"></input> <br />
      <label className="loginpage" >PASSWORD</label> <br />
      <input className="loginpage" id="pw" placeholder="Password"></input> <br />
      <button className="loginpage" id="login-btn">Login</button>
      <button className="loginpage" id="signup-btn">Sign Up</button> <br />
      <a className="loginpage" href="">Continue as guest</a>
    </div>
  )
}

export default Login;