import React, {useState} from 'react';
import { encode } from "base-64";
const URL = 'https://eleox-interview-api-7n5su.ondigitalocean.app/';


function LoginForm({ Login, error }){
    const [details, setDetails] = useState({name:"", username:"", password: ""});

    const submitHandler = async(e) => {
        e.preventDefault();
        Login(details);
        console.log(details);
        await fetch (URL, {
        method: "POST",
        body: JSON.stringify({
            username: details.username,
            password: details.password
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            if(result.message === "SUCCESS"){
                alert("You are logged in.");
                Login(details);
            } else {
                alert("Please check your login information.");
            }
        });
    }


    return (

        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="Login"/>
            </div>

        </form>
    )
}

export default LoginForm;