import React, { useState } from 'react';
// import logo from './logo1.png';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {


  const adminUser= {
  username: "interview",
    password: "eleox"
  }

  const [user, setUser] = useState({name:"", username:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.username == adminUser.username && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name,
        username: details.username
      })
    } else{
      console.log("details do not match");
      alert("incorrect credentials")
    }
  }

  const Logout = () => {
    setUser({name:"", username:""});
    }


  return (
    <div className="App">
      {(user.username != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
      ) : (
         <LoginForm Login={Login} error={error} />
      )}



    </div>
  );
}

export default App;
