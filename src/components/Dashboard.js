import { useEffect, useState } from "react";
import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

const Dashboard = () => {
    const user = getUser();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);
    if (!authenticated) {
        // Redirect
    } else {
        return (
            <div>
                <p>Welcome to your Dashboard</p>
            </div>
        );
    }
};
export default Dashboard;