import React, { useEffect } from 'react';
import g1_ from '../../../assets/img/g1_.jpg'
import g2 from '../../../assets/img/g2.jpg'
import g3 from '../../../assets/img/g3.jpg'
import g4 from '../../../assets/img/g4.jpg'
import LazyLoad from 'react-lazy-load';
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=' my-container lg:h-[100vh]  px-5 lg:px-0   grid grid-cols-1 lg:grid-cols-3 gap-5 mt-36 mb-8' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className='lg:flex flex-col gap-5 lg:h-[100vh]'>
                <div className='overflow-hidden h-1/2 relative hover:opacity-75 transition duration-200'>

                    <LazyLoad className='w-full h-full object-cover '>
                        <img className='w-full h-full object-cover ' src={g1_} alt="" />
                    </LazyLoad>

                    <button className='text-4xl text-white font-bold top-0 right-2 bottom-0 left-0 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
                </div>
                <div className='overflow-hidden h-1/2 relative hover:opacity-75 transition duration-200'>
                    <LazyLoad className='w-full h-full object-cover '>
                        <img className='w-full h-full object-cover ' src={g2} alt="" />
                    </LazyLoad>
                    <button className='text-4xl text-white font-bold top-0 right-2 bottom-0 left-0 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
                </div>
            </div>
            <div className='overflow-hidden relative hover:opacity-75 transition duration-200'>
                <LazyLoad className='w-full h-full object-cover '>
                    <img className='object-cover w-full h-full' src={g3} alt="" />
                </LazyLoad>
                <button className='text-4xl text-white font-bold top-0 right-2 bottom-1 left-1 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
            </div>
            <div className='overflow-hidden relative hover:opacity-75 transition duration-200'>
                <LazyLoad className='w-full h-full object-cover '>
                    <img className='object-cover w-full h-full' src={g4} alt="" />
                </LazyLoad>
                <button className='text-4xl text-white font-bold top-0 right-2 bottom-1 left-1 absolute  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2'>Shop now</button>
            </div>
        </div>
    );
};

export default Gallery;