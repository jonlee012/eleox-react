import React, { useState } from 'react';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {


  // const adminUser= {
  // username: "int@eleox.com",
  //   password: "eleox"
  // }

  // const [user, setUser] = useState({name:"", username:""});
  // const [error, setError] = useState("");
  //
  // const Login = details => {
  //
  //   // console.log(details);
  //   // if (details.username == adminUser.username && details.password == adminUser.password){
  //   //   console.log("logged in");
  //   //   setUser({
  //   //     name: details.name,
  //   //     username: details.username
  //   //   })
  //   // } else{
  //   //   console.log("details do not match");
  //   //   alert("incorrect credentials")
  //   // }
  //
  // }
  //
  // const Logout = () => {
  //   setUser({name:"", username:""});
  //   }


  return (
  //   <div className="App">
  //     {(user.username != "") ? (
  //         <div className="welcome">
  //           <h2>Welcome, <span>{user.name}</span></h2>
  //           <button onClick={Logout}>Logout</button>
  //         </div>
  //     ) : (
  //        <LoginForm Login={Login} error={error} />
  //     )}
  //   </div>
  // );
      <Router>
        <StyledContainer>
          <Switch>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </StyledContainer>
      </Router>
  );
//   <div className="wrapper">
//     <h1>Application</h1>
//     <BrowserRouter>
//       <Switch>
//         <Route path="/dashboard">
//           <Dashboard />
//         </Route>
//         <Route path="/preferences">
//           <Preferences />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   </div>
// );
}

export default App;
