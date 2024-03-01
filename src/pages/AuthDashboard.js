import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';

const AuthDashboard = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-white'>
            <div className='h-[90vh] w-[90vw] flex justify-center items-center'>
                <div className=' p-8 rounded-lg flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold text-center mb-6'>Welcome Back.</h1>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-red-500 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faGoogle}
                            style={{ marginTop: '3px', color: 'red', fontSize: '20px' }}
                            className="transition-colors duration-300 ease-in-out hover:text-white" />
                        Continue with Google
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-500 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon icon={faFacebook} style={{ marginTop: '3px', color: '#1877F2', fontSize: '20px' }} />
                        Continue with Facebook
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-600 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon icon={faTwitter} style={{ marginTop: '3px', color: '#1DA1F2', fontSize: '20px' }} />
                        Continue with Twitter
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-700 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon icon={faLinkedin} style={{ marginTop: '3px', color: '#0A66C2', fontSize: '20px' }} />
                        Continue With Linkedin
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-black hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon icon={faGithub} style={{ marginTop: '2px', color: '#181717', fontSize: '20px' }} />
                        Continue With Github
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-black hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon icon={faApple} style={{ marginTop: '1px', color: '#000000', fontSize: '20px' }} />
                        Continue With Apple
                    </div>
                    <div className='text-center'>
                        No Account? <span className='text-green-500 font-bold hover:cursor-pointer hover:underline'>Create One</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthDashboard;
