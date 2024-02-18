import React from 'react'

const AuthLandingPage = () => {
    return (
        <>
            <div className="bg-blue-600 min-h-screen flex justify-center items-center">
                <div className='container bg-white rounded-2xl px-4 py-8 w-full md:max-w-md'>
                    <div className="text-center text-2xl font-bold text-slate-600 mb-8">Registration Form</div>
                    <form>
                        <div className='input-details text-gray-500'>
                            <div className='input-box text-lg flex flex-col mb-4'>
                                <label className='font-medium mb-2'>User name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your username'
                                    className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400' />
                            </div>
                            <div className='input-box text-lg flex flex-col mb-4'>
                                <label className='font-medium mb-2'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400' />
                            </div>
                            <div className='input-box text-lg flex flex-col mb-4'>
                                <label className='font-medium mb-2'>Password</label>
                                <input
                                    type='password'
                                    placeholder='Enter your password'
                                    className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400' />
                            </div>
                            <div className='input-box text-lg flex flex-col mb-4'>
                                <label className='font-medium mb-2'>Confirm Password</label>
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    className='border border-slate-300 rounded-md shadow-sm p-2 placeholder-slate-400 focus:outline-none focus:border-sky-400' />
                            </div>
                        </div>
                        <div className="inputBtn">
                            <button
                                type="submit"
                                className='w-full bg-blue-600 p-2 text-white rounded-md shadow-sm'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthLandingPage
