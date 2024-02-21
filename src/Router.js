import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLandingPage from './pages/AuthLandingPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import useAuth from './hooks/useAuth';

const Router = () => {

    const { loggedInUser, loading, error } = useAuth() // Use the useAuth hook to get authentication status

    // Render loading state if loading is true
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error message if there is an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Routes>
            {/* Routes for unauthorized users */}
            {!loggedInUser ? (
                <>
                    <Route path="/" element={<AuthLandingPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    {/* Redirect to signin page if user tries to access dashboard */}
                    <Route path="/dashboard" element={<Navigate to="/signin" replace />} />
                </>
            ) :
                (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/* Prevent logged-in users from accessing signin, signup, and forgot-password pages */}
                        <Route path="/signin" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/signup" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/forgot-password" element={<Navigate to="/dashboard" replace />} />
                    </>
                )
            }


        </Routes>
    );
};

export default Router;
