import { PhoneMissedCallIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import fb from '../Images/facebook.png';
import wa from '../Images/whatsapp.png';
import yt from '../Images/youtube.png';
import dr from '../Images/dribbble.png';
import fig from '../Images/figma.png';

const Footer = () => {
    return (
        <footer className='bg-[#27282B]'>
            {/* top part of footer */}
            <div className='flex flex-col md:flex-row items-center  px-5 md:px-20 py-10'>

                {/* left footer widget */}
                <div className='flex-1 text-slate-50 mr-5 my-10 md:my-0'>
                    <img src={logo} alt="" />
                    <p className='my-3 text-[#8C8C8C]'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>

                    <div className='flex flex-row items-center pt-2'>
                        <div className='flex flex-row items-center justify-between text-slate-50 text-sm'>
                            <div className='border-2 border-[#343538] rounded-full p-2 bg-[#343538] w-10 h-10'>
                                <PhoneMissedCallIcon className='w-5 text-slate-50' />
                            </div>
                            <div className='ml-3'>
                                <p>Have a question?</p>
                                <p>310-437-2766</p>
                            </div>
                        </div>

                        <div className='flex flex-row items-center justify-between text-slate-50 text-sm ml-20'>
                            <div className='border-2 border-[#343538] rounded-full p-2 bg-[#343538] w-10 h-10'>
                                <PhoneMissedCallIcon className='w-5 text-slate-50' />
                            </div>
                            <div className='ml-3'>
                                <p>Have a question?</p>
                                <p>310-437-2766</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* right footer widget */}

                <div className='text-slate-50 flex-1 my-10 md:my-0'>
                    <h2 className='font-bold text-2xl'>Newsletter</h2>
                    <p className='my-3 text-[#8C8C8C]'>Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                    <form className='flex flex-row items-center w-full'>
                        <input className=' py-3 px-5 rounded-full bg-[#343538] w-full' type="text" placeholder='Enter your email' />
                        <input className='bg-blue-400 p-2 rounded-full ml-[-80px]' type="submit" value='Submit' />
                    </form>
                </div>
            </div>

            <hr className='border-[#8C8C8C]' />

            {/* footer bottom part */}
            <div className='text-[#8C8C8C] py-10  px-5 md:px-20'>
                <ul className='grid grid-cols-4 md:grid-cols-10'>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Jobs</Link>
                    </li>
                    <li>
                        <Link to='/'>Press</Link>
                    </li>
                    <li>
                        <Link to='/'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/'>FAQ</Link>
                    </li>
                    <li>
                        <Link to='/'>Career</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='/'>Sitemap</Link>
                    </li>
                    <li>
                        <Link to='/'>Terms of use</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between pb-5 px-5 md:px-20'>
                <div className='flex flex-row mb-5 md:mb-0'>
                    <Link to='/' className='mr-2 border-[#343538] p-4 rounded-full bg-[#343538]'>
                        <img src={fb} alt="" />
                    </Link>
                    <Link to='/' className='mr-2 border-[#343538] p-4 rounded-full bg-[#343538]'>
                        <img src={yt} alt="" />
                    </Link>
                    <Link to='/' className='mr-2 border-[#343538] p-4 rounded-full bg-[#343538]'>
                        <img src={dr} alt="" />
                    </Link>
                    <Link to='/' className='mr-2 border-[#343538] p-4 rounded-full bg-[#343538]'>
                        <img src={fig} alt="" />
                    </Link>
                    <Link to='/' className='mr-2 border-[#343538] p-4 rounded-full bg-[#343538]'>
                        <img src={wa} alt="" />
                    </Link>
                </div>

                <div>
                    <p className='text-slate-300'> &copy; 2000-2021, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;