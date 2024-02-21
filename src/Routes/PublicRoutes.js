import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import AuthLandingPage from '../pages/AuthLandingPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from './../pages/SignupPage';
import ForgotPassword from './../pages/ForgotPassword';


const PublicRoutes = () => {
    const { loggedInUserState } = useContext(AuthContext);

    // If user is logged in, redirect to dashboard
    if (loggedInUserState) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <Routes>
            <Route path="/" element={<AuthLandingPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    );
};

export default PublicRoutes;
