import {HomeTitle, HomeSubTitle, EleoxLogo, StyledButton, ButtonGroup} from "../styles/Styles";
//logo
import Logo from "./../img/logo.png"

const Home = () => {
    return (
        <div>
            <HomeTitle size={70}>
                Welcome to Eleox
            </HomeTitle>
            <EleoxLogo image={Logo}/>
            <HomeSubTitle size={27}>
                Enter our page below
            </HomeSubTitle>

            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    )
};

export default Home;