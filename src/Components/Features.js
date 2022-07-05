import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Images/carbon_view-filled.png'
import img2 from '../Images/Group.png'
import img3 from '../Images/Vector.png'
import img4 from '../Images/Vector1.png'
import img5 from '../Images/Vector2.png'

const Features = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center py-12 px-5 md:px-20'>
            <div>
                <h2 className='text-3xl text-purple-600 font-bold'>Start learning with <br /> us right now!</h2>
                <p className='text-md text-slate-700 my-5'>Choose from 100+ online video <br /> courses with new updates.</p>
                <button className='py-2 px-10 mt-5 border-2 text-purple-500 text-lg border-purple-500 rounded-full hover:bg-purple-500 hover:text-white duration-700 mb-5'>
                    <Link to='/'>Enroll Now</Link>
                </button>
            </div>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='flex flex-col items-center mr-0 md:mr-5'>
                    <div className='flex flex-row justify-center items-center mb-5'>
                        <p className='text-yellow-500 text-sm font-bold'>Live <br /> Exams</p>
                        <div className='border-2 border-yellow-200 p-10 rounded-full ml-3 bg-yellow-100'>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center my-5'>
                        <p className='text-blue-500 text-sm font-bold'>Live <br /> Classes</p>
                        <div className='border-2 border-blue-200 p-10 rounded-full ml-3 bg-blue-100'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center my-5'>
                        <p className='text-orange-500 text-sm font-bold'>100 k+ <br /> Views</p>
                        <div className='border-2 border-orange-200 p-10 rounded-full ml-3 bg-orange-100'>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center ml-0 md:ml-5'>
                    <div className='flex flex-row justify-center items-center my-5'>
                        <p className='text-red-500 text-sm font-bold'>100+ <br /> Lessons</p>
                        <div className='border-2 border-red-200 p-10 rounded-full ml-3 bg-red-100'>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center mt-5'>
                        <p className='text-green-500 text-sm font-bold'>1000+ <br /> Lessons</p>
                        <div className='border-2 border-green-200 p-10 rounded-full ml-3 bg-green-100'>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;