//CSS and Style
import "./../styles/Card.css"
import {
    DashTitle,
    DashSubTitle,
    EleoxLogo,
    ExtraSmallText,
    DashFormArea,
    ButtonGroup,
    StyledButton,
    colors,
} from "../styles/Styles";
//logo
import Logo from "./../img/logo.png"

import axios from "axios"

import React, { useEffect, useState } from "react";



const getFullUserName = (userInfo) => {
    const {first_name, last_name} = userInfo;
    return `${first_name} ${last_name}`;
}
const getJobTitle = (userInfo) => {
    const {job_title} = userInfo;
    return `${job_title}`;
}
const getEmail = (userInfo) => {
    const {email} = userInfo;
    return `${email}`;
}
const getAvatar = (userInfo) => {
    const {avatar} = userInfo;
    return `${avatar}`;
}

const Dashboard = () => {
    let people = [];
    const [randomUserDataJSON, setRandomUserData] = useState('')
    const [userInfos, setUserInfos] = useState([])



    const urlPeople = "https://eleox-interview-api-7n5su.ondigitalocean.app/people"
    let token = localStorage.getItem("token");
    console.log(token);
    const configToken = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json' ,
            'Authorization': "Bearer " +  token,

        }
    }
    console.log(configToken);

    const fetchRandomData = ()  => {
       return axios.get(urlPeople, configToken)
           .then(({data}) => {
               console.log(data);
               return data;
           })
           .catch((err) => {
               console.log(err);
           })

    }
    useEffect(() => {
        fetchRandomData().then(randomData => {
            setRandomUserData(JSON.stringify(randomData, null, 2) || 'No user data found');
            setUserInfos(randomData.people)
        })
    }, []);


    return (
<div>
    <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        width: "100%",
        padding: "15px",
        display: "flex",
        justifyContent: "flex-start",
    }}>
        <EleoxLogo image={Logo}/>
    </div>
    <DashTitle size={50} style={{
        marginBottom: "25px",
        marginTop: "200px",

    }}>
        Welcome To Your Dashboard
    </DashTitle>
    <div>
            {
        userInfos.map((userInfo) => (
            <div className="card-container" key={userInfo.id}>
                    <DashFormArea  bg={colors.dark1}>
                        <img className="photo" src={getAvatar(userInfo)} />
                        <DashSubTitle size={20}>
                            {getFullUserName(userInfo)}
                        </DashSubTitle>
                        <ExtraSmallText>
                            {getJobTitle(userInfo)}
                            <br/>
                            {getEmail(userInfo)}
                        </ExtraSmallText>
                    </DashFormArea>
            </div>

             ))
                }
        <div>
            <ButtonGroup style={{
                marginTop: "50px",
            }}>
                <StyledButton to="/">Logout</StyledButton>
            </ButtonGroup>
        </div>
         </div>
    </div>

    )
};

export default Dashboard;