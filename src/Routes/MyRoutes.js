import React from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
// import AuthContext from '../context/AuthContext';

const MyRoutes = () => {
    // const { loggedInUserState } = useContext(AuthContext);

    return (
        <>
            {/* {loggedInUserState ? <PrivateRoutes /> : <PublicRoutes />} */}
            <PrivateRoutes />
            <PublicRoutes />
        </>
    );
};

export default MyRoutes;
