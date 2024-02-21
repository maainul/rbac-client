import React from 'react'
import SigninPage from './SigninPage'
import useAuth from '../hooks/useAuth'

const AuthLandingPage = () => {

    const { loading, error, redirectToDashboardIfLoggedIn } = useAuth()

    // Redirect to dashboard if user is logged in
    redirectToDashboardIfLoggedIn()

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render signin page content
    return (
        <>
            <SigninPage />
        </>
    )
}

export default AuthLandingPage
