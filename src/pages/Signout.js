import axios from "axios"
import { SIGNOUT_URL } from './../api/auth';
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Signout = () => {
    const { updateUserStateAndInfo } = useContext(AuthContext)
    const navigate = useNavigate()

    async function LogOut() {
        try {
            // Update loggedInUserStateUser state after logout
            await axios.get(SIGNOUT_URL)
            await updateUserStateAndInfo()
            navigate("/signin")
        } catch (error) {
            // Handle logout failure, if needed
            console.error('Logout failed:', error);
        }
    }

    return (
        <button onClick={LogOut} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-400"> Logout</button>
    )
}
export default Signout