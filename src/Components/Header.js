import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Ellipse1 from '../Images/Ellipse1.png';
import Ellipse2 from '../Images/Ellipse2.png';
import Ellipse3 from '../Images/Ellipse3.png';
import Ellipse4 from '../Images/Ellipse4.png';

const Header = () => {
    return (
        <section className='bg-gradient-to-br from-indigo-500 to-purple-500'>
            <Navbar />
            <div className='flex flex-row justify-between items-center px-5 md:px-20 py-12 relative z-0'>
                <div className=''>
                    <p className='bg-slate-100 rounded-full inline px-3 py-1 text-purple-600 font-semibold text-xs z-0'>#MOST TRUSTED CERTIFICATION BY THE INDAUSTRY</p>
                    <h1 className='text-4xl text-slate-100 font-bold my-8'>Unleash Your SCRUM Skills,<br />
                        Grab More Attention To Résumé</h1>
                    <button className='py-1 px-5 border-2 text-slate-50 text-lg font-semibold border-slate-50 rounded-full hover:bg-slate-100 hover:text-purple-900 duration-700 mb-5'>
                        <Link to='/'>Enroll Now</Link>
                    </button>
                    <div className='flex flex-col justify-center mb-10'>
                        <p className='text-sm my-3 text-slate-100'>10% OFF on all courses * | Offer valid for</p>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span>2</span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span>3</span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span >56</span>
                                </span>
                                min
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:grid lg:grid-template-col-2 '>
                    <img className='w-20 absolute bottom-80 right-48' src={Ellipse2} alt="" />
                    <img className='w-28 absolute bottom-56 right-72' src={Ellipse3} alt="" />
                    <img className='w-48 absolute bottom-5 right-80' src={Ellipse4} alt="" />
                    <img className='w-72 absolute bottom-[-55px] right-0 overflow-hidden' src={Ellipse1} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;