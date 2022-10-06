import React from 'react';


const HomePage = () => {
    return(
    <div className="text-center">
        <h1 className="main-title home-page-title">welcome</h1>
        <Link to="/">
            <button to="/login" className="primary-button">Log out</button>
        </Link>
    </div>
)
};


const Home = () => {
    return (
        <div>
           
                <Avatar image={Logo}/>
            </div>
            <StyledTitle size={65}>
                Welcome to Eleox
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page
            </StyledSubTitle>

            <ButtonGroup><StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
    
    )
};

export default Home;
export default HomePage;