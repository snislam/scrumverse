import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../Images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='px-5 lg:px-12 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-slate-50 z-50'>
            <div className='flex flex-row justify-between items-center mx-auto'>

                {/* logo here */}
                <div className=''>
                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>
                </div>

                {/* menu here */}
                <div className='flex flex-row-reverse lg:flex-row lg:justify-between items-center'>
                    {/* mobile menu btn */}
                    <button className='block lg:hidden ml-10' onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? <MenuIcon className='bg-blue-600 text-white p-1 w-8 h-8' /> : <XIcon className='bg-blue-600 text-white p-1 w-8 h-8' />}
                    </button>
                    <menu className={isOpen ? 'absolute lg:static w-64 right-0 top-12 z-50' : 'absolute lg:static right-[-2000px] w-64'}>
                        <ul className='block lg:flex lg:flex-row text-md font-medium px-5 py-1 lg:px-0 lg:py-0 mt-2 lg:mt-0 bg-white lg:bg-transparent shadow-md lg:shadow-none'>
                            <li className='mb-3 lg:mb-0'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 ' to='/'>Home</Link></li>
                            <li className='mb-3 lg:mb-0'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 ' to='/'>About</Link></li>
                            <li className='mb-3 lg:mb-0'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 ' to='/'>Courses</Link></li>
                            <li className='mb-3 lg:mb-0'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 ' to='/'>Blogs</Link></li>
                            <li className='mb-3 lg:mb-0'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 ' to='/'>Contact</Link></li>
                            <li className='mb-3 lg:mb-0 lg:hidden block'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 block lg:hidden' to='/signin'>Sign In</Link></li>
                            <li className='mb-3 lg:mb-0 lg:hidden block'><Link className='hover:text-slate-200 lg:text-slate-50 text-slate-900 text-md font-medium py-2 px-2 mx-2 duration-500 block lg:hidden' to='/signup'>Sign Up</Link></li>
                        </ul>
                    </menu>
                </div>

                {/* login signin button */}
                <div className='text-md font-medium hidden lg:flex lg:flex-row items-center'>
                    <button className='py-1 px-5 hover:border-2 hover:border-slate-50 hover:rounded-full hover:bg-slate-100 hover:text-slate-900 duration-200 mr-1'>
                        <Link to='/signin'>Sign In</Link>
                    </button>
                    <button className='py-1 px-5 border-2 border-slate-50 rounded-full hover:bg-slate-100 hover:text-slate-900 duration-200 '>
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar