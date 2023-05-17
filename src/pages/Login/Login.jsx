import React from 'react';
import { FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='lg:h-[calc(100vh-76px)] md:flex justify-center mt-5'>
           <div className='bg-slate-200 lg:w-96 lg:h-[450px] px-12 lg:px-8 py-3 rounded'>
            <h3 className='text-2xl font-semibold mt-3'>Sign Up</h3>
            <form className='mt-8 flex flex-col '>
                <label >Email</label>
                <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your email' type="email" name="email" id="" />
               
                <label className='mt-3'>password</label>
                <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your password' type="password" name="password" id="" />
                
                <input className='mt-5 rounded py-2 text-white font-semibold bg-[#ee5684] hover:bg-[#df396b] cursor-pointer' type="submit" value="Login" />
            <p className='mt-2 text-center'><small>Don't have an account ? <Link to='/register' className='font-semibold text-[#ee5684]'>Register</Link></small></p>
            </form>
            <div className="divider">OR</div>
            <div className='mt-3 border-slate-300 border-2 py-2 rounded-xl flex cursor-pointer'>
                <FaGoogle className='h-6 w-6'/>
                <p className=' w-full text-center'>Continue with Google</p>
            </div>
           </div>
        </div>
    );
};

export default Login;