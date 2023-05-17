import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from '../../../assets/img/banner1.jpg'
import banner2 from '../../../assets/img/banner2.jpg'
import banner3 from '../../../assets/img/banner3.jpg'
const Carousel = () => {
    return (
        <div className=' mb-5 h-[calc(90vh-64px)]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                /* autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }} */
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            // modules={[Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide>
                   
                    <div className='h-[calc(90vh-64px)]  bg-cover bg-center' style={{ backgroundImage: `url("${banner1}")` }}>
                        <div className='absolute top-0 bottom-0 flex items-center  bg-gradient-to-r from-[#0b0a0a] to-[rgba(21, 21, 21, 1)] '>
                            <div className='pl-24 text-white  '>
                                <h3 className='text-5xl font-bold '>Go above and beyond</h3>
                                <p className='mt-3'>Build your sense of adventure with the new Land Rover <br /> Classic Defender 90.</p>

                                <button className='my-btn-container mt-3'>
                                    <p className='my-btn-content'>
                                        Showp Now
                                    </p>
                                </button>
                               
                                  
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   
                    <div className='h-[calc(90vh-64px)]  bg-cover bg-center' style={{ backgroundImage: `url("${banner2}")` }}>
                        <div className='absolute top-0 bottom-0 flex items-center  bg-gradient-to-r from-[#0b0a0a] to-[rgba(21, 21, 21, 1)] '>
                            <div className='pl-24 text-white  '>
                                <h3 className='text-5xl font-bold '>Go above and beyond</h3>
                                <p className='mt-3'>Build your sense of adventure with the new Land Rover <br /> Classic Defender 90.</p>

                                <button className='my-btn-container mt-3'>
                                    <p className='my-btn-content'>
                                        Showp Now
                                    </p>
                                </button>
                               
                                  
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   
                    <div className='h-[calc(90vh-64px)]  bg-cover bg-center' style={{ backgroundImage: `url("${banner3}")` }}>
                        <div className='absolute top-0 bottom-0 flex items-center  bg-gradient-to-r from-[#0b0a0a] to-[rgba(21, 21, 21, 1)] '>
                            <div className='pl-24 text-white  '>
                                <h3 className='text-5xl font-bold '>Go above and beyond</h3>
                                <p className='mt-3'>Build your sense of adventure with the new Land Rover <br /> Classic Defender 90.</p>

                                <button className='my-btn-container mt-3'>
                                    <p className='my-btn-content'>
                                        Showp Now
                                    </p>
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
               

             
            </Swiper>

        </div>
    );
};

export default Carousel;