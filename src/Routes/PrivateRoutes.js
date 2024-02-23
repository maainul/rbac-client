import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserList from './../pages/UserList';
import ApplicaitonRoutes from '../pages/ApplicationRoutes';
import Dashboard from '../pages/Dashboard';
import AuthContext from '../context/AuthContext';



const PrivateRoutes = () => {
    const { loggedInUserState } = useContext(AuthContext);
    // Redirect to login if user is not logged in
    if (!loggedInUserState) {
        return <Navigate to="/login" />;
    }

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path='/application-route-list' element={<ApplicaitonRoutes />} />
        </Routes>
    );
};

export default PrivateRoutes;
