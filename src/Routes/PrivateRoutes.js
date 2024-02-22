import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AuthContext from './../context/AuthContext';
import Dashboard from './../pages/Dashboard';
import UserList from './../pages/UserList';
import ApplicaitonRoutes from '../pages/ApplicationRoutes';



const PrivateRoutes = () => {
    const { loggedInUserState } = useContext(AuthContext);

    // If user is not logged in, redirect to sign in
    if (!loggedInUserState) {
        return <Navigate to="/signin" replace />;
    }

    return (
        <Routes>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path='/application-route-list' element={<ApplicaitonRoutes />} />
        </Routes>
    );
};

export default PrivateRoutes;
