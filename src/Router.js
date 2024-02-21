import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import AuthLandingPage from './pages/AuthLandingPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import AuthContext from './context/AuthContext';

const Router = () => {

    const { loggedInUserState } = useContext(AuthContext)

    if (loggedInUserState === undefined) {
        return (
            <div>loading .... </div>
        )
    }

    return (
        <Routes>
            {loggedInUserState === false && (
                <>
                    <Route path="/" element={<AuthLandingPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </>
            )}

            {loggedInUserState === true && (
                <Route path="/dashboard" element={<Dashboard />} />
            )}
        </Routes>
    );
};

export default Router;
