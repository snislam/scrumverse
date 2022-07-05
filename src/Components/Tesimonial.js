import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

const Tesimonial = () => {
    return (
        <section className='px-5 md:px-20 pt-10 pb-20'>
            <div className='flex flex-row justify-start items-center'>
                <div className='flex-1 flex flex-row items-center'>
                    <p className="text-blue-500 font-bold">Our Testimonials</p>
                    <div className='flex-1 w-full h-1 bg-blue-600 ml-12'></div>
                </div>
                <div className='flex-1'></div>
            </div>
            <div>
                <div class="avatar flex flex-roe items-center justify-center my-20">
                    <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/JmbzSpn/male-1.jpg" alt='man1' />
                    </div>
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
                        <img src="https://i.ibb.co/PQxr4DB/female-2.jpg" alt='woman1' />
                    </div>
                    <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/pXKCPz7/male-2.jpg" alt='man2' />
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center w-[90%] md:w-3/5 mx-auto '>
                    <div>
                        <ChevronLeftIcon className='text-purple-700 w-12' />
                    </div>
                    <div className='text-center mx-5'>
                        <p className='text-md text-slate-700'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                        <h3 className='text-blue-500 font-bold mt-5'>Md. Danish Ansari</h3>
                        <p className='text-blue-400'>Learner, Govt. Employee @UPPCL</p>
                    </div>
                    <div>
                        <ChevronRightIcon className='text-purple-700 w-12' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tesimonial;