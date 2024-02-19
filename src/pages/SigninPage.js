import React from 'react'
import { useNavigate } from "react-router-dom"


const SigninPage = () => {

    const navigate = useNavigate()


    return (
        <>
            <div className="md:bg-blue-600 min-h-screen flex justify-center items-center bg-slate-200">
                <div className='container bg-white rounded-md max-w-md px-4 py-8 md:px-8 mx-7'>
                    <div className="text-center text-base md:text-2xl font-bold text-slate-500 mb-8 border-b border-gray-200 pb-3">Login Page</div>
                    <form>
                        <div className='input-details text-gray-500 text-sm md:text-lg'>
                            <div className='input-box  flex flex-col mb-4'>
                                <label className='font-medium mb-2'>User name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your username'
                                    className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400' />
                            </div>
                            <div className="flex flex-col">
                                <div className='input-box  flex flex-col'>
                                    <div className='flex justify-between'>
                                        <label className='font-medium mb-2'>Password</label>
                                        <span className='text-indigo-600 text-sm md:text-base underline underline-offset-1 hover:cursor-pointer' onClick={() => {
                                            navigate('/forgot-password')
                                        }}>Forgot Password</span>
                                    </div>
                                    <input
                                        type='password'
                                        placeholder='Enter your password'
                                        className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400' />
                                </div>
                            </div>
                        </div>
                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm text-sm md:text-base mt-6 hover:bg-blue-500'>Login</button>
                        </div>
                        <div className='text-center my-4 text-sm md:text-base'>
                            <span className='text-slate-500'>New on our platform? </span>
                            <span onClick={() => {
                                navigate('/')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1 hover:text-indigo-400'>Create an account</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SigninPage
