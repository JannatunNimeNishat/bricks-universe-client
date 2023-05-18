import React from 'react';
import errorImg from '../../assets/img/404.json'
import arrowLeft from '../../assets/img/left_arrow_red.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative flex items-center justify-center'>
            <Link to='/' className='absolute top-0 left-10 flex items-center '>
               
                <Lottie className='h-20 w-20' animationData={arrowLeft}/>
                <p className='text-3xl font-semibold -ml-4 hover:text-red-500'>Back to Home</p>
            </Link>
            <Lottie animationData={errorImg} loop={true} />
        </div>
    );
};

export default ErrorPage;