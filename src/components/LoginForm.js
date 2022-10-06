import React, {useState} from 'react';
import { encode } from "base-64";
import { Navigate } from "react-router-dom";
import { useHistory } from "react-router-dom";



function LoginForm({ Login, error }){
    // const [details, setDetails] = useState({name:"", username:"", password: ""});
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const navigate = useNavigate();

    // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    const adminUser= {
        username: "int@eleox.com",
        password: "eleox"
    }


    const submitHandler = event => {
        event.preventDefault();
        const URL = 'https://eleox-interview-api-7n5su.ondigitalocean.app/';


        const token = (URL + "login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
    })
        fetch(URL, token).then((response) => response.json())
        .then((data) => {
            history.push("/dashboard");
            console.log('Success:', data);
        })
            .catch((error) => {
                console.error('Error:', error);
            });
            // if(username == adminUser.username && password == adminUser.password){
            //     alert("You are logged in.");
            //
            //     // setauthenticated(true)
            //     // localStorage.setItem("authenticated", true);
            //     // localStorage.setItem('token', JSON.stringify(response.data['access_token']))
            //     // navigate("/dashboard");
            //
            // } else {
            //     alert("Please check your login information.");
            // }
        // });
        navigate('/HomePage');

    }


    // console.log(setauthenticated());
    // console.log(username);
    return (

        <form onSubmit={submitHandler}
        >
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div> ) : ""}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="name">Name: </label>*/}
                {/*    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />*/}
                {/*</div>*/}
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username"
                    onChange={(event => setUserName(event.target.value))}
                    value={username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"
                           onChange={(event => setPassword(event.target.value))}
                           value={password}
                    />
                </div>
                <input type="submit" value="Login" />
            </div>

        </form>
    )
}

export default LoginForm;