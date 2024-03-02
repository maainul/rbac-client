import React from 'react'
import errorImage from './page-misc-error.png'; // Import the image
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <h1 className='mb-5 text-3xl font-bold text-red-500'>Page Not Found :(</h1>
            <p className='text-2xl text-purple-500 font-semibold'>Oops! 😖 The requested URL was not found on this server.</p>
            <h1
                className='m-12 text-2xl text-white bg-purple-500 p-3 rounded-md hover:cursor-pointer'
                onClick={() => {
                    navigate('/')
                }}
            >Back to Home</h1>
            <img src={errorImage} alt='error page' className='w-1/4' />
        </div>
    )
}

export default PageNotFound
