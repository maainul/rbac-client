import { Link } from "react-router-dom"
import axios from "axios"
import { SIGNOUT_URL } from "../../api/auth"
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate()
    async function LogOut() {
        await axios.get(SIGNOUT_URL)
        navigate('/')
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/signup">Register</Link>
            <Link to="/signin">Login</Link>
            <Link to="/user-list">User list</Link>
            <button onClick={LogOut}> Logout</button>
        </div>
    )
}


export default Navbar