import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Logged_In_Check_URL } from './../api/auth';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedInUserState, setloggedInUserState] = useState(undefined);

    async function updateLoginState() {
        const loggedInUserStateRes = await axios.get(
            Logged_In_Check_URL
        );
        setloggedInUserState(loggedInUserStateRes.data);
    }

    useEffect(() => {
        updateLoginState();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUserState, updateLoginState }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };