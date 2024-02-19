import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { SIGNUP_URL } from '../api/auth'


const SignupPage = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setErrors(["Password don't match"])
            return
        }
        try {
            const res = await axios.post('https://rbac-4g20.onrender.com/api/v1/auth/signup', {
                email, username, password, confirmPassword
            })
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                navigate('/signin')
            }
        } catch (error) {
            console.log('Something Went Wrong.Please Wait for sometime and Try again')
        }
    }


    return (
        <>
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
                                {errors && errors.filter((error) => error.field === "username").map((filteredError) => (
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
                                {errors && errors.filter((error) => error.field === "email").map((filteredError) => (
                                    <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                                ))}
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className='input-box  flex flex-col md:w-1/2'>
                                    <label className='font-medium mb-2'>Password</label>
                                    <input
                                        type='password'
                                        placeholder='Enter your password'
                                        className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='input-box  flex flex-col mb-4 md:w-1/2'>
                                    <label className='font-medium mb-2'>Confirm Password</label>
                                    <input
                                        type='password'
                                        placeholder='Confirm Password'
                                        className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            {errors && errors.filter((error) => error.field === "password").map((filteredError) => (
                                <p key={filteredError.field} className='text-sm text-red-500'>{filteredError.error}</p>
                            ))}
                        </div>
                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm text-sm md:text-base mt-3'
                            >Sign up</button>
                        </div>
                        <div className='text-center my-4 text-sm md:text-base'>
                            <span className='text-slate-500'>Already have an account ?</span> <span onClick={() => {
                                navigate('/signin')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1'>Sign in instead</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage
