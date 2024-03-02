import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './../utils/toast/toast.css'
import { SIGNIN_URL } from './../api/auth';
import AuthContext from '../context/AuthContext';


const SigninPage = () => {

    const { updateUserStateAndInfo } = useContext(AuthContext)

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors([])

        try {
            const frontEndErrors = []
            if (username.trim() === '' || username === null) {
                frontEndErrors.push({ field: 'username', error: 'Please enter Username' })
            }
            if (password === '') {
                frontEndErrors.push({ field: 'password', error: 'Please enter password' });
            }

            if (frontEndErrors.length > 0) {
                // Set front-end validation errors
                setErrors(frontEndErrors)
                // Show toast for error
                showToast(errorMsg)
                return // Exit early if there are errors
            }

            // If there are no front-end validation errors, make the API call
            const res = await axios.post(SIGNIN_URL, {
                username,
                password,
            });
            if (res.data.errors) {
                setErrors(res.data.errors);
                showToast(errorMsg)
            } else {
                showToast(successMsg)
                setTimeout(() => {
                    // After Signin Update State To True
                    updateUserStateAndInfo()
                    navigate('/');
                }, 500)
            }
        } catch (error) {
            console.log('Something Went Wrong.Please Wait for sometime and Try again');
        }

    };

    // Toast Notification  
    const [toasts, setToasts] = useState([])

    const successMsg = {
        icon: <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />,
        content: `Successfully submitted`,
        type: 'success'
    }

    const errorMsg = {
        icon: <FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red' }} />,
        content: `Please fix the error!`,
        type: 'error'
    }

    const showToast = (msg) => {
        const toast = (
            <div key={Date.now()} className={`toast ${msg.type}`}>
                {msg.icon} {msg.content}
            </div>
        )
        setToasts([...toasts, toast])
        setTimeout(() => {
            setToasts(toasts.filter((t) => t.key !== toast.key))
        }, 500)
    }

    return (
        <>
            <div id="toastBox">{toasts}</div>
            <div className="md:bg-blue-600 min-h-screen flex justify-center items-center bg-slate-200">
                <div className='container bg-white rounded-md max-w-md px-4 py-8 md:px-8 mx-7'>
                    <div className="text-center text-base md:text-2xl font-bold text-slate-500 mb-8 border-b border-gray-200 pb-3">Login Form</div>
                    <form onSubmit={handleSubmit}>

                        <div className='input-details text-gray-500 text-sm md:text-lg'>
                            <div className='input-box  flex flex-col mt-4'>
                                <label className='font-medium mb-2'>User name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your username'
                                    className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors && errors.filter((error) => error.field === "username").map((filteredError) => (
                                    <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className='input-box  flex flex-col md:w-full'>
                                    <label className='font-medium mb-2'>Password</label>
                                    <input
                                        type='password'
                                        placeholder='Enter your password'
                                        className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errors && errors.filter((error) => error.field === "password").map((filteredError) => (
                                        <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm text-sm md:text-base mt-3 hover:bg-blue-500'
                            >Login</button>
                        </div>

                        <div className='text-center my-4 text-sm md:text-base'>
                            <span className='text-slate-500'>New on our platform ?</span> <span onClick={() => {
                                navigate('/signup')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1 hover:text-indigo-400'>Create an account</span>
                        </div>

                        <div className='text-center my-4 text-sm md:text-base'>
                            <span className='text-slate-500'>Want to Back Multiple Signin Page ?</span> <span onClick={() => {
                                navigate('/')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1 
                            hover:text-indigo-400'>Go Back</span>
                        </div>

                    </form>
                </div >
            </div >
        </>
    )
}

export default SigninPage;
