
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import getGoogleOAuthURL from '../utils/oAuth/getGoogleOAuthURL';

const AuthDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen flex justify-center items-center bg-white'>
            <div className='h-[90vh] w-[90vw] flex justify-center items-center'>
                <div className=' p-8 rounded-lg flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold text-center mb-6'>Welcome Back.</h1>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-red-600 hover:text-white hover:cursor-pointer pl-8'
                        onClick={() => {
                            const googleOAuth = getGoogleOAuthURL()
                            window.location.href = googleOAuth;
                        }}>
                        <FontAwesomeIcon
                            icon={faGoogle}
                            className="mt-1 text-red-600 text-xl" />
                        Continue with Google
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-600 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="mt-1 text-blue-600 text-xl"
                        />
                        Continue with Facebook
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-500 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="mt-1 text-blue-500 text-xl"
                        />
                        Continue with Twitter
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-blue-700 hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="mt-1 text-blue-700 text-xl"
                        />
                        Continue With Linkedin
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-black hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="mt-1 text-black text-xl"
                        />
                        Continue With Github
                    </div>
                    <div className='flex flex-row gap-3 align-middle bg-gray-100 rounded-full p-4 font-semibold  w-72 hover:bg-black hover:text-white hover:cursor-pointer pl-8'>
                        <FontAwesomeIcon
                            icon={faApple}
                            className="mt-1 text-black text-xl"
                        />
                        Continue With Apple
                    </div>
                    <div className='text-center'>
                        No Account ?
                        <span href='/signin'
                            className='text-green-500 font-bold hover:cursor-pointer hover:underline'
                            onClick={() => {
                                navigate('/signin');
                            }}
                        > Create One</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthDashboard;
