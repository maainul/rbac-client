import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ForgotPassword from '../pages/ForgotPassword';
import AuthDashboard from '../pages/AuthDashboard';
import PageNotFound from '../pages/PageNotFound/PageNotFound';


const PublicRoutes = () => {
    // const { loggedInUserState } = useContext(AuthContext);

    // If user is logged in, redirect to dashboard
    // if (loggedInUserState) {
    //     return <Navigate to="/" replace />;
    // }

    return (
        <Routes>
            <Route path="/" element={<AuthDashboard />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* If Authrization Failed From Google It will Take this Page */}
            <Route path="/oauth/error" element={<PageNotFound />} />
        </Routes>
    );
};

export default PublicRoutes;
