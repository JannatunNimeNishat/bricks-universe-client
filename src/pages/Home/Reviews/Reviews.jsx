import React, { useEffect } from 'react';
import review_bg from '../../../assets/img/review_bg.jpg'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <div className=' mt-20 mb-20 lg:h-[90vh] bg-cover bg-center ' style={{ backgroundImage: `url("${review_bg}")` }}
        data-aos="fade-up"
        >
            <div className='hero-overlay bg-opacity-90 lg:flex items-center px-3 border'  
    >
                <div className='my-container grid grid-cols-1 lg:grid-cols-3 gap-8 py-20  '>
                    <div className='text-white lg:flex items-center'>
                        <div className=''>
                            <h4 className='my-active'>TESTIMONIALS</h4>
                            <h3 className='text-4xl font-bold mt-3'>What Our Clients Say About Us</h3>
                            <p className='mt-3'>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                            <button className='my-btn mt-5'>About Us</button>
                        </div>
                    </div>
                    <div className='bg-white mx-5 lg:mx-0 px-8 lg:px-14 py-16 rounded-2xl hover:-translate-y-2 hover:transition-transform'>
                        <div className=''>
                            <FaQuoteRight className='text-green-600 ' />
                            <p className='text-xl font-semibold mt-6'>What a great store for the entire family! My kids love this place because of the toys!</p>
                            <div className='flex gap-3 mt-8'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://i.ibb.co/YkLPz16/c3.jpg" />
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='font-semibold'>Peter Bowman</p>
                                    <p>CEO, Business Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white  mx-5 lg:mx-0 px-8 lg:px-14  py-16 rounded-2xl hover:-translate-y-2 hover:transition-transform'>
                        <div className=''>
                            <FaQuoteRight className='text-green-600 ' />
                            <p className='text-xl font-semibold mt-6'>Not only do the toys make our children squeal with joy, but the sales team is awesome!</p>
                            <div className='flex gap-3 mt-8'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img className='' src="https://i.ibb.co/VBfVkZt/c2.jpg" />
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='font-semibold'>John Doe</p>
                                    <p>CEO, Business Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;