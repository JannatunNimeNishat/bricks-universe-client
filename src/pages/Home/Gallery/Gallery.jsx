import React from 'react';
import g1_ from '../../../assets/img/g1_.jpg'
import g2 from '../../../assets/img/g2.jpg'
import g3 from '../../../assets/img/g3.jpg'
import g4 from '../../../assets/img/g4.jpg'
const Gallery = () => {
    return (
        <div className='my-container lg:h-[100vh]     grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 mb-8'>
            <div className='lg:flex flex-col gap-5 lg:h-[100vh]'>
                <div className='overflow-hidden h-1/2 relative hover:opacity-75 transition duration-200'>
                    <img className='w-full h-full object-cover ' src={g1_} alt="" />
                    <button className='text-4xl text-white font-bold top-0 right-2 bottom-0 left-0 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
                </div>
                <div className='overflow-hidden h-1/2 relative hover:opacity-75 transition duration-200'>
                    <img className='w-full h-full object-cover ' src={g2} alt="" />
                    <button className='text-4xl text-white font-bold top-0 right-2 bottom-0 left-0 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
                </div>
            </div>
            <div className='overflow-hidden relative hover:opacity-75 transition duration-200'>
                <img className='object-cover w-full h-full' src={g3} alt="" />
                <button className='text-4xl text-white font-bold top-0 right-2 bottom-1 left-1 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
            </div>
            <div className='overflow-hidden relative hover:opacity-75 transition duration-200'>
                <img className='object-cover w-full h-full' src={g4} alt="" />
                <button className='text-4xl text-white font-bold top-0 right-2 bottom-1 left-1 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
            </div>
        </div>
    );
};

export default Gallery;