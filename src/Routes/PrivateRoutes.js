import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './../pages/UserList';
import ApplicationRoutes from '../pages/ApplicationRoutes'; // Corrected import
import Dashboard from '../pages/Dashboard';
// import AuthContext from '../context/AuthContext';

const PrivateRoutes = () => {
    // const { loggedInUserState } = useContext(AuthContext);
    // Redirect to login if user is not logged in
    // if (!loggedInUserState) {
    //     return <Navigate to="/login" />;
    // }

    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path='/application-route-list' element={<ApplicationRoutes />} /> {/* Corrected component */}
        </Routes>
    );
};

export default PrivateRoutes;
