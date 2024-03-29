import React, { useEffect } from 'react';
import c1 from '../../../assets/img/c1.jpg'
import c2 from '../../../assets/img/c2.jpg'
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazy-load';

const CreativeApproach = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='mt-32  pb-16 bg-white px-5 lg:px-0'>
            <div className='my-container grid grid-cols-1 lg:grid-cols-5 lg:gap-10 py-10'>

                <div className='col-span-2' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                <LazyLoad>
                <img className='rounded-xl  ' src={c1} alt="" />

                </LazyLoad>
                </div>

                <div className='col-span-3  lg:ml-16' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" >
                    <div className=''>
                        <p className='font-bold my-active'>CREATIVE APPROACH</p>
                        <h3 className='text-5xl font-bold mt-5 my-primary-color'>We help you take <br /> care of the kids</h3>
                        <p className='mt-4'>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>
                    </div>
                    <LazyLoad>
                    <img className=' mt-10  lg:mt-28 rounded-xl' src={c2} alt="" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default CreativeApproach;