import React, { useContext } from 'react';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import AuthContext from './context/AuthContext';

const MyRoutes = () => {
    const { loggedInUserState } = useContext(AuthContext);

    return (
        <>
            {loggedInUserState ? <PrivateRoutes /> : <PublicRoutes />}
        </>
    );
};

export default MyRoutes;
