import React from 'react'
import errorImage from './page-misc-error.png'; // Import the image


const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <h1 className='mb-5 text-3xl font-bold text-red-500'>Page Not Found :(</h1>
            <p className='mb-14 text-2xl text-purple-500 font-semibold'>Oops! 😖 The requested URL was not found on this server.</p>
            <img src={errorImage} alt='error page' className='w-1/4' />
        </div>
    )
}

export default PageNotFound
