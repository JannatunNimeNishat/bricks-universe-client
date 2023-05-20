import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';

//img
import n1 from '../../../assets/img/n1.jpg'
import n3 from '../../../assets/img/n3.jpg'
import n2 from '../../../assets/img/n2.png'
import n5 from '../../../assets/img/n5.png'
import n4 from '../../../assets/img/n4.jpg'

//
import './FeaturedSet.css'

const FeaturedSet = () => {
    return (
        <div className='my-container pb-8'>
            <h3 className='text-4xl mt-8 mb-8'>Featured Sets:</h3>
            <Swiper

                //
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}

                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    // clickable: true,
                }}
                navigation

                modules={[FreeMode, Navigation]}
                className="swiper-container"

            >
                <SwiperSlide>
                    <div className="card card-compact  lg:h-[400px] bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-3'>
                            <img className='w-full h-full' src={n2} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-10">

                            <h2 className="card-title">Toyota GR Supra</h2>
                            <p>Price: $130</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-3 '>
                            <img className='w-full h-full' src={n3} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-14">

                            <h2 className="card-title">Modern House</h2>
                            <p>Price: $50</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-3'>
                            <img className='w-full h-full' src={n4} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-16">

                            <h2 className="card-title">Office</h2>
                            <p>Price: $100</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5">
                        <figure className='mt-1'>
                            <img className='w-full h-full ' src={n5} alt="Shoes" />
                        </figure>
                        <div className=" space-y-5 mt-3">

                            <h2 className="card-title">Super Mario</h2>
                            <p>Price: $50</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-5'>
                            <img className='w-full h-full' src={n1} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-20">

                            <h2 className="card-title">Nissan Skylien GT-R</h2>
                            <p>Price: $60</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-5'>
                            <img className='w-full h-full' src={n1} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-20">

                            <h2 className="card-title">Nissan Skylien GT-R</h2>
                            <p>Price: $60</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-compact lg:h-[400px]  bg-base-100 shadow-xl px-5 py-5">
                        <figure className=' mt-5'>
                            <img className='w-full h-full' src={n1} alt="Shoes" />
                        </figure>
                        <div className=" space-y-6 mt-20">

                            <h2 className="card-title">Nissan Skylien GT-R</h2>
                            <p>Price: $60</p>

                            <Link to={``} className="btn btn-primary bg-[#ee5684] hover:bg-[#df396b] border-0">View Details</Link>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FeaturedSet;