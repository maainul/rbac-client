import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faWarning,faCircleCheck,faCircleXmark,faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './toast.css'

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false)
    const [passIsMatch, setPassIsMatch] = useState(false)
    
    const navigate = useNavigate();
    
    // password strencth checker
    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const strength = calculatePasswordStrength(newPassword);
        setPasswordStrength(strength);
        setPasswordTouched(true)
    };
    
    // calculate length and strength
    const calculatePasswordStrength = (password) => {
        if (password.length === 0) {
            return "no";
        }
        else if (password.length < 4) {
            return 'weak';
        } else if (password.length >= 4 && password.length < 8) {
            return 'medium';
        } else if (password.length >= 8) {
            return 'strong';
        }
    };
    
    // add color based on strength
    const passwordStrengthColor = (strength) => {
        if (strength === 'strong') {
            return 'text-green-500';
        } else if (strength === 'medium') {
            return 'text-yellow-500';
        } else if (strength === 'weak') {
            return 'text-red-500';
        }
        return 'text-gray-500'; // Default color
    };
    
    // Confirm Password Match Check
    const hanelConfirmPassword = (e) => {
        const { value } = e.target
        setConfirmPassword(value);
        setPassIsMatch(value === password);
    }
    
    // submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://rbac-4g20.onrender.com/api/v1/auth/signup', {
                email,
                username,
                password,
                confirmPassword,
            });
            if (res.data.errors) {
                setErrors(res.data.errors);
                showToast(errorMsg)
            } else {
                showToast(successMsg)
                navigate('/signin');
            }
        } catch (error) {
            console.log('Something Went Wrong.Please Wait for sometime and Try again');
        }
    };

    // Toast Notification 
    const [toasts,setToasts] = useState([])

    const  successMsg = {
        icon: <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green'}} />,
        content :  `Successfully submitted`,
        type:'success'
    }
    
    const errorMsg = {
        icon: <FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red'}} />,
        content : `Please fix the error!`,
        type:'error'
    }

    const invalidMsg = {
        icon: <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'orange' }} />,
        content :`Invalid input, check again`,
        type:'invalid'
    }
    
    const showToast = (msg) =>{
        const toast = (
            <div key={Date.now()} className={`toast ${msg.type}`}>
                	     {msg.icon} {msg.content}
            </div>
        )
        setToasts([...toasts,toast])
        setTimeout(()=>{
            setToasts(toasts.filter((t) => t.key !== toast.key))
        },4000)
    }

    return (
        <>
          <div id="toastBox">{toasts}</div>
            <div className="md:bg-blue-600 min-h-screen flex justify-center items-center bg-slate-200">
                <div className='container bg-white rounded-md max-w-md px-4 py-8 md:px-8 mx-7'>
                    <div className="text-center text-base md:text-2xl font-bold text-slate-500 mb-8 border-b border-gray-200 pb-3">Registration Form</div>
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
                                {(username === '' && errors) && errors.filter((error) => error.field === "username").map((filteredError) => (
                                    <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                ))}
                            </div>
                            <div className='input-box  flex flex-col mt-4'>
                                <label className='font-medium mb-2'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {(email === '' && errors) && errors.filter((error) => error.field === "email").map((filteredError) => (
                                    <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                ))}
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className='input-box  flex flex-col md:w-1/2'>
                                    <label className='font-medium mb-2'>Password</label>
                                    <input
                                        type='password'
                                        placeholder='Enter your password'
                                        className={`border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 
                                        ${passwordStrength === 'weak' ? 'focus:outline-none focus:border-red-400' :
                                                passwordStrength === 'medium' ? 'focus:outline-none focus:border-yellow-400' :
                                                    passwordStrength === 'strong' ? 'focus:outline-none focus:border-green-400' : 'focus:outline-none focus:border-sky-400'}
                                        `}
                                        onChange={handleChangePassword}
                                    />
                                    {(passwordTouched && password.length > 0) && (
                                        <p className={`${passwordStrengthColor(passwordStrength)} text-sm`}>
                                            Password strength {passwordStrength}
                                        </p>
                                    )}
                                    {(password === '' && errors) && errors.filter((error) => error.field === "password").map((filteredError) => (
                                        <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                    ))}
                                </div>
                                <div className='input-box  flex flex-col mb-4 md:w-1/2'>
                                    <label className='font-medium mb-2'>Confirm Password</label>
                                    <input
                                        type='password'
                                        placeholder='Confirm Password'
                                        className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400'
                                        onChange={hanelConfirmPassword}
                                    />
                                    {(confirmPassword.length > 0 && !passIsMatch) && (
                                        <>
                                            <div className='flex gap-2 text-center  ml-1'>
                                                <FontAwesomeIcon icon={faTimes} style={{ color: 'red', display: 'inline-block' }} />
                                                <span className='text-sm text-red-500 inline'>Password do not match.</span>
                                            </div>
                                        </>
                                    )}

                                    {(confirmPassword.length > 0 && passIsMatch) && (
                                        <>
                                            <div className='flex gap-2 text-center ml-1'>
                                                <FontAwesomeIcon icon={faCheck} style={{ color: 'green', display: 'inline-block' }} />
                                                <span className='text-sm text-green-500'>Password match.</span>
                                            </div>
                                        </>
                                    )}
                                    {(password === '' && confirmPassword.length > 0) && (
                                        <>
                                            <div className='flex gap-2 text-center ml-1'>
                                                <FontAwesomeIcon icon={faWarning} style={{ color: 'orange', display: 'inline-block' }} />
                                                <span className='text-sm text-orange-600 inline'>Password enter First.</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm text-sm md:text-base mt-3 hover:bg-blue-500'
                            >Sign up</button>
                        </div>
                        <div className='text-center my-4 text-sm md:text-base'>
                            <span className='text-slate-500'>Already have an account ?</span> <span onClick={() => {
                                navigate('/signin')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1 hover:text-indigo-400'>Sign in instead</span>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default SignupPage;
