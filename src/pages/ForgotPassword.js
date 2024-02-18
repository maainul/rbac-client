import React from 'react'
import { useNavigate } from "react-router-dom"


const ForgotPassword = () => {

    const navigate = useNavigate()


    return (
        <>
            <div className="md:bg-blue-600 min-h-screen flex justify-center items-center bg-slate-200">
                <div className='container bg-white rounded-md max-w-md px-4 py-8 md:px-8 mx-7'>
                    <div className="text-center text-base md:text-2xl font-bold text-slate-500 mb-4 border-b border-gray-200 pb-3">Forgot Password ? 🔒</div>
                    <p className='text-sm pb-4 md:text-base text-slate-500'>Your new password must be different from previously used passwords</p>
                    <form>
                        <div className='input-details text-gray-500 text-sm md:text-lg'>
                            <div className='input-box  flex flex-col mb-4'>
                                <label className='font-medium mb-2'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400' />
                            </div>

                        </div>
                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm text-sm md:text-base mt-6'>Send reset link</button>
                        </div>
                        <div className='text-center my-4 text-sm md:text-base'>
                            <span onClick={() => {
                                navigate('/signup')
                            }} className='text-indigo-600 hover:cursor-pointer underline underline-offset-1'>Back to Home</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
