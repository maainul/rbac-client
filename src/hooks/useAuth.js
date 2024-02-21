// useAuth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Logged_In_Check_URL } from './../api/auth';

const useAuth = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchLoggedInStatus() {
            try {
                const res = await axios.get(Logged_In_Check_URL);
                setLoggedInUser(res.data);
            } catch (error) {
                console.log('Error fetching logged in user:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchLoggedInStatus();
    }, []);

    const redirectToDashboardIfLoggedIn = () => {
        if (loggedInUser === true) {
            navigate('/dashboard');
        }
    };

    return { loggedInUser, loading, error, redirectToDashboardIfLoggedIn };
};

export default useAuth;
