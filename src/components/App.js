import React, {useState} from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import LoginForm from './LoginForm';


function App() {

  const [loginPage, setloginPage] = useState(false);
  const [loginPageType, setloginPageType] = useState(false);

  function handleLogin (element){
    const name = element.target.name;
    if(name === "login"){
      setloginPageType(true);
      setloginPage(!loginPage);
    }else if(name === "signUp"){
      setloginPageType(false);
      setloginPage(!loginPage);
    }
    
  }
  function handleLoginDisplay (){
    setloginPage(!loginPage);
  }

  return (
    <div >
      < Navbar onButtonClick={handleLogin}/>
      { loginPage && (< LoginForm type = {loginPageType} onButtonClick={handleLoginDisplay}/>)}
      <MainContent/>
    </div>
  );
}

export default App;
