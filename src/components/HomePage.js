import React from 'react';


const HomePage = () => {
    return(
    <div className="text-center">
        <h1 className="main-title home-page-title">welcome</h1>
        <Link to="/">
            <button className="primary-button">Log out</button>
        </Link>
    </div>
)
};

export default HomePage;