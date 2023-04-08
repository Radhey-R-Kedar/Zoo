import React, { useState } from "react";

function Navbar(props){

  const [navbarContent, setNavbarContent] = useState(false);

  function handleNavbar(){
    setNavbarContent(!navbarContent);
   
  }

    return(
          <nav className="navbar">
            <div className="heading">
            <h1 >Zooo..</h1>
            </div>
            <div onClick={handleNavbar} className="contentBtn"> 
                <i className="line"></i>
                <i className="line"></i>
                <i className="line"></i>

            </div>
             <div  className={navbarContent ? "navContent1 navbar-content navbar-content1" : "navContent navbar-content navbar-content1 "}>
              <ul>
                <li><a id="home" href="/">Home</a></li>
                <li><a id="contact-us" href="/">Contact-us</a></li>
                <li><button  name="login" id="login" onClick={props.onButtonClick}>Login</button></li>
                <li><button  name="signUp" id="signUp" onClick={props.onButtonClick}>SignUp</button></li>
              </ul>
              </div>
              
          </nav>
    );
}

export default Navbar;