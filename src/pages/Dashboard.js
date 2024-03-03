import React, { useContext } from 'react'
// import Navbar from '../components/layout/Navbar';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const { userData } = useContext(AuthContext)


    return (
        <>
            {/* <Navbar /> */}
            <div >
                <h1 className='font-bold text-3xl'>Welcome
                    if(userData){
                        <span className='font-bold text-2xl'> {userData.username} - {userData.email} - {userData.role},</span>
                    }
                </h1>
            </div >
        </>
    )
}

export default Dashboard
