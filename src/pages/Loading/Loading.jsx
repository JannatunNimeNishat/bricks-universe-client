import React from 'react';
import loading from '../../assets/img/loading.json'
import Lottie from "lottie-react";
const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Lottie className='h-96 w-96' animationData={loading} loop={true} />;
        </div>
    );
};

export default Loading;