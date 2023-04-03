import React from "react";

function LoginForm(props){
    return(
        <div className="loginform">
            <div className="loginFormImage" style={{ backgroundImage: "url(images/background8.jpg)" }}>
             <h2>Welcome to</h2>
             <h1>Zooo..</h1>
            </div>
            <div className="loginFormContent">
            <button onClick={props.onButtonClick} className="cut">
                <img src="images/close1.png" alt="" />
            </button>
            <form action="/login">
                <h2>{props.type? "Login": "Sign Up"}</h2>
                <input className="input" type="email" placeholder="Email" name="email" />
                <input className="input" type="password" name="password" id="password" placeholder="Password" />
                {!props.type && <input className="input" type="password" name="conformPassword" id="conformPassword" placeholder="Conform Password" />}
                <button className="loginbutton" type="submit">{props.type? "Login": "Sign Up"}</button>
                <button className="googleloginbutton" type="submit">Continue with Google</button>
                <button className="googleloginbutton" type="submit">Continue with Facebook</button>
                <button className="googleloginbutton" type="submit">Continue with Github</button>
            </form>
            </div>
            
        </div>
    );
}

export default LoginForm;