import React from 'react';
import { Link } from 'react-router-dom'

const Newsletter = () => {
    return (
        <section className='mx-5 md:mx-20 bg-[#5F72BE] my-10 rounded-lg'>
            <div className='flex flex-col md:flex-row items-center justify-between px-12 py-8 text-slate-50'>
                <div className='my-5 md:my-0'>
                    <h4 className='text-lg font-bold'>Email Us</h4>
                    <p className='text-md'>Connect with us in case of any queries, complaints or feedbacks.</p>
                </div>
                <div className='my-5 md:my-0'>
                    <button className='bg-[#2D81F7] text-slate-50 py-2 px-16'>
                        <Link to='/'>Contact Us</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;