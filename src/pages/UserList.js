import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { R_USR_URL } from '../api/auth'
import Navbar from '../components/layout/Navbar'

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(R_USR_URL);
                setUsers(res.data.data);
            } catch (error) {
                console.log('Something Went Wrong. Please Wait for sometime and Try again');
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount


    return (
        <>
            <Navbar />
            {users.map(user => (
                <div key={user._id}>
                    <p>Name: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>role: {user.role}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default UserList
