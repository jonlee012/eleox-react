import styled from 'styled-components';

//Styled Background
import background from './../assets/pexels-pixabay-373543.jpeg';

// react router
import { Link } from 'react-router-dom';


export const colors ={
    primary: "#fff",
    theme: "#da1a1a",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF"
}



//styled component
export const StyledContainer = styled.div`
margin: 0;
min-height: 100vh;
display: flex;
justify-content: center;
align-items:center;
background:linear-gradient(0deg, rgba(0, 0, 0,0.6), rgba(0, 0, 0,0.6)), url(${background});
background-size:cover;
background-attachment:fixed;
`;

//Home Main Title CSS
export const HomeTitle = styled.h2`
font-size: ${(props) => props.size}px;
text-align: center;
padding: 5px;
color: ${colors.primary};
margin-bottom: 20px;
`;

// Home Sub title CSS
export const HomeSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${colors.primary};
padding: 5px;
margin-bottom: 50px;
`;
//Dash Main Title CSS
export const DashTitle = styled.h2`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${colors.primary};
`;

// Dash Sub title CSS
export const DashSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${colors.primary};

`;

//h2 Css
export const StyledTitle = styled.h2`
font-size: ${(props) => props.size}px;
text-align: center;
padding: 5px;
margin-bottom: 20px;
`;



export const EleoxLogo = styled.div`
width: 120px;
height:120px;
border-radius:50px;
background-image:url(${props => props.image});
background-size: cover;
background-position: center;
margin:auto;
margin-bottom: 20px;
`;

export const StyledButton = styled(Link)`
padding:10px;
width: 150px;
background-color: transparent;
font-size:16px;
border: 3px solid ${colors.primary};
border-radius:25px;
color: ${colors.primary};
text-decoration:none;
text-align:center;
transition: ease-in-out 0.3s;
outline:0;

&:hover{
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor:pointer;
}
`;
export const DeleteButton = styled(Link)`
padding:5px;
width: 100px;
background-color: transparent;
font-size:12px;
border: 2px solid ${colors.primary};
border-radius:20px;
color: ${colors.primary};
text-decoration:none;
text-align:center;
transition: ease-in-out 0.3s;
outline:0;

&:hover{
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor:pointer;
}
`;
export const ButtonGroup = styled.div`
display:flex;
justify-content:space-around;
flex-direction:row;
margin-top: 25px;
margin-bottom: 20px;

`;

// Input
export const StyledTextInput = styled.input`
width:280px;
padding: 15px;
// padding-left: 50px;
font-size: 17px;
letter-spacing: 1px;
color: ${colors.dark1};
background-color: ${colors.light2};
border: 0;
outline:0;
display: block;
margin: 5px auto 10px auto;
transition: ease-in-out 0.3s;



&:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
}
`;

export const StyledLabel = styled.p`
text-align:left;
font-size: 13px;
font-weight: bold;
`;
//Reused component
export const  StyledFormArea = styled.div`
background-color: ${props => props.bg || colors.light1};
text-align:center;
padding:45px 55px;
`;

//similir to first button used same css to implmant
export const StyledFormButton = styled.button`
padding:10px;
width: 150px;
background-color: transparent;
font-size:16px;
border: 2px solid ${colors.theme};
border-radius:25px;
color: ${colors.theme};
transition: ease-in-out 0.3s;
outline:0;

&:hover{
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor:pointer;
}
`;

//Error Messege Components
export const ErrorMsg = styled.div`
font-size:11px;
color: ${colors.red};
margin-top: -5px;
margin-bottom: 10px;
text-align: left;
`;


//extract component
export const ExtraText = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${(props) => (props.color? props.color : colors.dark2)};
// padding-top: 2px;
margin-top: 5px;
`;


//textlinks
export const TextLink = styled(Link)`
text-decoration:none;
color: ${colors.theme};
transition:ease-in-out 0.3s;


&:hover {
text-decoration:underline;
letter-spacing: 2px;
font-weight:bold;
}
`;

// Icons
export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size: 21px;
top:35px;
${(props) => props.right && `right: 15px; `};
${(props) => !props.right && `left: 15px; `};
`;


