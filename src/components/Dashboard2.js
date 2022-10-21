//CSS and Style
import "./../styles/Card.css"
import {
    // DashTitle,
    DashSubTitle,
    // EleoxLogo,
    DeleteButton,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors
} from "../styles/Styles";
//logo
import Logo from "./../img/logo.png"

import React, { useEffect, useState } from "react";

const Dashboard = () => {
    let people = [];
    const [randomUserDataJSON, setRandomeUserData] = useState('')

    // const People = {
    //     id: "string",
    //     first_name: "string",
    //     last_name: "string",
    //     email: "string",
    //     job_title: "string",
    //     avatar: "string"
    // };
    //
    //
    // const [people, setPeople] = useState<People[]>([]);

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
    // const [userToken, setUserToken] = useState();
    // TODO: fetch GET request inside use effect
    //  pass usertoken into auth
    //  whenever we do a get request for people in interview DOC
    //  you can create a person component
    //  when receive array of people you can do a .MAP
    //  REACT how to map through components WATCH VIDEO


    // working on hiding profiles
    // const [showResults, setShowResults] = React.useState(false)
    // const onClick = () => setShowResults(true)
    // //
    // const [visible, setVisible] = React.useState(false);
    // TODO: use a useeffect look up a video
    //  everytime component re renders, if token is not valid, you can has a useeffect to reroute to login page

    // useEffect(() => {
    const fetchRandomData = ()  => {
        fetch(urlPeople, configToken)
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', JSON.stringify(data));



                // people = data.people;
                // console.log(people);
                // this.people = data;
                //             console.log(this.people);
                for (let value of Object.values(data.people)) {
                    console.log((value.first_name));;
                    // localStorage.setItem("token", value);
                    // console.log(data.people);
                    // history.push("/dashboard");
                    // setData(data)
                }

                // useEffect(() => {
                //    localStorage.setItem('dataKey', data);
                // }, [data]);

            })

            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // TODO: tried to pull user data using async function and render in jSx
    //  unsuccessful attempt to pull data from response
    // async function getUsers() {
    //     let url = urlToken;
    //     try {
    //         let res = await fetch(url);
    //         return await res.json();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // async function renderUsers() {
    //     let users = await getUsers();
    //     let html = '';
    //     users.forEach(user => {
    //         let htmlSegment = `<div class="user">
    //             <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt=''/>
    //                     <h2>${user.username} ${user.password}</h2>
    //                     <div class="email"><a href="email:${user.email}">${user.email}</a></div>
    //                 </div>`;
    //
    //         html += htmlSegment;
    //     });
    //
    //     let container = document.querySelector('.container');
    //     container.innerHTML = html;
    // }
    //
    // renderUsers();
    // 4. Setting *dogImage* to the image url that we received from the response above
    // },[])


    return (

        <div>
            {/*<div style={{*/}
            {/*    position: "absolute",*/}
            {/*    top: 0,*/}
            {/*    left: 0,*/}
            {/*    backgroundColor: "transparent",*/}
            {/*    width: "100%",*/}
            {/*    padding: "15px",*/}
            {/*    display: "flex",*/}
            {/*    justifyContent: "flex-start",*/}
            {/*}}>*/}
            {/*    <EleoxLogo image={Logo}/>*/}
            {/*</div>*/}
            {/*<DashTitle size={50} style={{*/}
            {/*    marginBottom: "25px",*/}
            {/*    marginTop: "130px",*/}

            {/*}}>*/}
            {/*    Welcome To Your Dashboard*/}
            {/*</DashTitle>*/}

            {/*<div className="card-container">*/}
            {/*    <div className="image-container">*/}
            {/*        <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt=''/>*/}
            {/*        <StyledFormArea  bg={colors.dark1}>*/}
            {/*            <DashSubTitle size={20}>*/}
            {/*                Member*/}
            {/*                <ButtonGroup>*/}
            {/*                    <DeleteButton to="/">Delete</DeleteButton>*/}
            {/*                </ButtonGroup>*/}
            {/*            </DashSubTitle>*/}
            {/*        </StyledFormArea>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="card-container">*/}
            {/*    <div className="image-container">*/}
            {/*        <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt=''/>*/}
            {/*        <StyledFormArea bg={colors.dark1}>*/}
            {/*            <DashSubTitle size={20}>*/}
            {/*                Member*/}
            {/*                <ButtonGroup>*/}
            {/*                    <DeleteButton to="/">Delete</DeleteButton>*/}
            {/*                </ButtonGroup>*/}
            {/*            </DashSubTitle>*/}
            {/*        </StyledFormArea>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="card-container">*/}
            {/*    <div className="image-container">*/}
            {/*        <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt=''/>*/}
            {/*        <StyledFormArea  bg={colors.dark1}>*/}
            {/*            <DashSubTitle size={20}>*/}
            {/*                Member*/}
            {/*                <ButtonGroup>*/}
            {/*                    <DeleteButton to="/">Delete</DeleteButton>*/}
            {/*                </ButtonGroup>*/}
            {/*            </DashSubTitle>*/}
            {/*        </StyledFormArea>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <ButtonGroup style={{*/}
            {/*        marginTop: "50px",*/}
            {/*    }}>*/}
            {/*        <StyledButton to="/">Logout</StyledButton>*/}
            {/*    </ButtonGroup>*/}
            {/*</div>*/}
            {/*<div className="container"></div>*/}

            <div>
                {people.map(people => {
                    return (
                        <div key={people.id}>
                            <h2>name: {people.first_name}</h2>
                            {/*<h2>country: {people.last}</h2>*/}

                            <hr />
                        </div>
                    );
                })}
            </div>



            <button onClick={()=>{
                fetchRandomData();
            }}>Fetch Data</button>
        </div>
    )
};

export default Dashboard;