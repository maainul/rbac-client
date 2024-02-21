import { Link } from 'react-router-dom';

import Signout from "../../pages/Signout";


function Navbar() {

    return (
        <div>
            {/* {loggedInUser ? ( */}
            {/* <> */}
            <div className="flex flex-row justify-between bg-blue-400 text-white text-xl text-bold text-center p-4">
                <div className="flex flex-row gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/user-list">User list</Link>
                </div>
                <Signout />
            </div>
            {/* </> */}
            {/* ) : ( */}
            {/* <> */}
            <Link to="/signup">Register</Link>
            <Link to="/signin">Login</Link>
            {/* </> */}
            {/* ) */}
            {/* } */}
        </div >
    )
}

export default Navbar