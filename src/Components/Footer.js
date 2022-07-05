import { PhoneMissedCallIcon } from '@heroicons/react/outline';
import React from 'react';
import logo from '../Images/logo.png'

const Footer = () => {
    return (
        <footer className='bg-[#27282B] px-5 md:px-20 py-10'>
            {/* top part of footer */}
            <div className='flex flex-col md:flex-row items-center'>

                {/* left footer widget */}
                <div className='flex-1 text-slate-50 mr-5'>
                    <img src={logo} alt="" />
                    <p className='my-3 text-slate-300'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>

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

                <div className='text-slate-50 flex-1'>
                    <h2 className='font-bold text-2xl'>Newsletter</h2>
                    <p className='my-3 text-slate-300'>Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                    <form className='flex flex-row items-center w-full'>
                        <input className=' py-3 px-5 rounded-full bg-[#343538] w-full' type="text" placeholder='Enter your email' />
                        <input className='bg-blue-400 p-2 rounded-full ml-[-80px]' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;