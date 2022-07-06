import React from 'react';
import Navbar from './Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center w-full h-screen'>
                <p className='font-semibold'>404 - Erroor</p>
                <h1 className='text-5xl font-bold '>Oops! Not found</h1>
            </div>
        </>
    );
};

export default NotFound;