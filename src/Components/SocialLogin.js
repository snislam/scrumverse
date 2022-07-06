import React from 'react';


const SocialLogin = () => {

    return (
        <div>
            {/* from here I start social loging system */}
            <div className='flex flex-row justify-center items-center my-5'>
                <div className='w-full mr-5 h-[2px] bg-blue-300'></div>
                <div>OR</div>
                <div className='w-full ml-5 h-[2px] bg-blue-300'></div>
            </div>

            <div>
                <p className='text-sm text-blue-900 pl-3 font-semibold'>Signin Using Gmail</p>
                <button className='border-2 border-blue-100 text-slate-700 py-2 px-4 bg-white hover:bg-blue-100 duration-700 my-2 w-full rounded-full'>
                    <p>Sign In With Google</p>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;