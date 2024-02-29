import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import SigninPage from '../pages/SigninPage';
import SignupPage from './../pages/SignupPage';
import ForgotPassword from './../pages/ForgotPassword';
import AuthDashboard from '../pages/AuthDashboard';


const PublicRoutes = () => {
    const { loggedInUserState } = useContext(AuthContext);

    // If user is logged in, redirect to dashboard
    if (loggedInUserState) {
        return <Navigate to="/" replace />;
    }

    return (
        <Routes>
            <Route path="/authDashboard" element={<AuthDashboard />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    );
};

export default PublicRoutes;
