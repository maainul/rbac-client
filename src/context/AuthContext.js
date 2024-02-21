// import axios from "axios"
// import React, { createContext, useEffect, useState } from "react"
// import { Logged_In_Check_URL } from "../api/auth"

// const AuthContext = createContext()


// function AuthContextProvider(props) {
//     const [loggedIn, setLoggedIn] = useState(undefined)

//     async function getLoggedIn() {
//         const loggedInRes = await axios.get(Logged_In_Check_URL)
//         setLoggedIn(loggedInRes.data)
//     }

//     useEffect(() => {
//         getLoggedIn()
//     }, [])

//     return (
//         <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
//             {props.childern}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext
// export { AuthContextProvider }