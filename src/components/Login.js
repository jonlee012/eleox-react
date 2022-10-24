//React
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

//Styled Components
import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from './../styles/Styles';


// FORMIK
import {Formik, Form} from 'formik';
import {TextInput} from '../styles/FormLibs';
import * as Yup from 'yup'

import { Link } from 'react-router-dom';

const Login = () => {
    // validation for user login


    const [data, setData] = useState("");

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const adminUser = {
        username: "int@eleox.com",
        password: "eleox",
    }
    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.dark2} size={30}>
                    Member Login
                </StyledTitle>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        data: "",
                    }}>

                    {({isSubmitting}) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault()
// TODO: in the login page - if i put a wrong username should not redirect to login
//  bonus points to put a error (alert or page) for wrong credentials
//  empty string should not pass
                            if (username === ""){
                                setUserNameError(true);
                                return console.log("hey user is invalid")
                            } else if(username === adminUser.username && password === adminUser.password) {
                                setUserNameError(false);
                                history.push("/dashboard");
                            }else if(username !== adminUser.username && password !== adminUser.password) {
                                setUserNameError(true);
                                history.push("/login");
                                return alert("Please enter valid credentials!")
                            }

                            const url = "https://eleox-interview-api-7n5su.ondigitalocean.app/login"
                            const config = {
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                },
                                body: JSON.stringify({
                                    username: username,
                                    password: password,
                                })
                            }
                            fetch(url, config)
                                .then((response) => response.json())
                                .then((data) => {
                                    // console.log('Success:', data);

                                    for (let value of Object.values(data)) {
                                        // console.log((value));;
                                        localStorage.setItem("token", value);
                                        // console.log(value);
                                        history.push("/dashboard");
                                        setData(data)
                                    }
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        }}
                        >
                            <TextInput
                                name="username"
                                type="text"
                                label="Username"
                                placeholder="Enter your Username"
                                value={username}
                                onChange={(e) => {setUserNameError(false)
                                    setUserName(e.target.value)}}
                            />
                          {userNameError ?  <div>username is empty</div>  :  null }
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">
                                        Login
                                    </StyledFormButton>
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New Here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
                <ExtraText>
                    Return to <TextLink to="/">Home</TextLink>
                </ExtraText>
            </StyledFormArea>

        </div>
    );
};


export default Login;
