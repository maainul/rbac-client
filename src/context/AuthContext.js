import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Logged_In_Check_URL } from './../api/auth';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedInUserState, setLoggedInUserState] = useState(undefined); // To Hold the User State True or False . If true then User is authenticated
    const [userData, setUserData] = useState(null); // For Store User Info with all information


    async function updateUserStateAndInfo() {
        try {
            const loggedInUserStateRes = await axios.get(Logged_In_Check_URL);
        // User Info with true and False
        /*
            loggedIn: true
            user: {
            _id: '65d1ac1046962924853cd541', 
            email: 'user1@gmail.com', 
            username: 'user1', 
            password: '$2b$10$dRhnFdunlq3o85hTFfgi5ul6d0y4woM31P7jx5KlPhrpp3vSFtn.e', 
            role: 'user',
        */

            if (loggedInUserStateRes.data.loggedIn) {
                setLoggedInUserState(true);
                setUserData(loggedInUserStateRes.data.user);
            } else {
                setLoggedInUserState(false);
                setUserData(null);
            }
        } catch (error) {
            console.error("Error fetching user authentication state:", error);
        }
    }


    useEffect(() => {
        updateUserStateAndInfo();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUserState, userData, updateUserStateAndInfo }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };