// import axios from "axios"
// import React, { createContext, useEffect, useState } from "react"
// import { Logged_In_Check_URL } from "../api/auth"

// const AuthContext = createContext()

// function AuthContextProvider(props) {
//     const [loggedIn, setLoggedIn] = useState(undefined)

//     async function fetchLoggedInStatus() {
//         const res = await axios.get(Logged_In_Check_URL);
//         setLoggedIn(res.data);
//     }

//     useEffect(() => {
//         fetchLoggedInStatus();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ loggedIn, fetchLoggedInStatus }}>
//             {props.childern}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext
// export { AuthContextProvider }