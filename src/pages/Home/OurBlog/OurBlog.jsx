import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import b1 from '../../../assets/blog/b1.jpg'
import b2 from '../../../assets/blog/b2.jpg'
import b3 from '../../../assets/blog/b3.jpg'
import b4 from '../../../assets/blog/b4.jpg'
import b5 from '../../../assets/blog/b5.jpg'
import { Autoplay, Pagination } from 'swiper';



const OurBlog = () => {
    return (
        <div className='bg-white '>
            <div className='my-container px-5 lg:px-0 py-20'>

                <h3 className='text-center  my-active'>OUR BLOG</h3>
                <h3 className='text-2xl lg:text-5xl text-center font-bold lg:mt-4 mb-3 lg:mb-16 my-primary-color'>Latest News</h3>

                <div className='py-3 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                        autoplay={{
                            delay:3000,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <figure className='rounded-lg  lg:h-[240px]'>
                                    <img  className='rounded-lg h-full w-full  hover:px-2 hover:py-2  ease-in duration-150' src={b1} alt="" />
                                </figure>
                                {/* body */}
                                <div className='py-8'>
                                    <div className='flex gap-5 items-center '>
                                        <div className='h-[2px] w-[55px] bg-black text-black'></div>
                                        <p className='uppercase'>toddler</p>
                                        <p className='text-slate-400'>Aug 6, 2023</p>
                                    </div>
                                    <h3 className='text-2xl font-semibold pt-4 pl-16'>What's the main <br /> challenge for parents?</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                            <figure className='rounded-lg  lg:h-[240px]'>
                                    <img  className='rounded-lg h-full w-full  hover:px-2 hover:py-2  ease-in duration-150' src={b2} alt="" />
                                </figure>
                                {/* body */}
                                <div className='py-8'>
                                    <div className='flex gap-5 items-center '>
                                        <div className='h-[2px] w-[55px] bg-black text-black'></div>
                                        <p className='uppercase'>toddler</p>
                                        <p className='text-slate-400'>Aug 2, 2023</p>
                                    </div>
                                    <h3 className='text-2xl font-semibold pt-4 pl-16'>How to choose the  best preschool program?</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                            <figure className='rounded-lg  lg:h-[240px]'>
                                    <img  className='rounded-lg h-full w-full  hover:px-2 hover:py-2  ease-in duration-150' src={b3} alt="" />
                                </figure>
                                {/* body */}
                                <div className='py-8'>
                                    <div className='flex gap-5 items-center '>
                                        <div className='h-[2px] w-[55px] bg-black text-black'></div>
                                        <p className='uppercase'>toddler</p>
                                        <p className='text-slate-400'>Jun 2, 2023</p>
                                    </div>
                                    <h3 className='text-2xl font-semibold pt-4 pl-16'>How to get your toddlers busy for two hours?</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                            <figure className='rounded-lg  lg:h-[240px]'>
                                    <img  className='rounded-lg h-full w-full  hover:px-2 hover:py-2  ease-in duration-150' src={b4} alt="" />
                                </figure>
                                {/* body */}
                                <div className='py-8'>
                                    <div className='flex gap-5 items-center '>
                                        <div className='h-[2px] w-[55px] bg-black text-black'></div>
                                        <p className='uppercase'>toddler</p>
                                        <p className='text-slate-400'>May 2, 2023</p>
                                    </div>
                                    <h3 className='text-2xl font-semibold pt-4 pl-16'>Guide to working at summer camps</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                            <figure className='rounded-lg  lg:h-[240px]'>
                                    <img  className='rounded-lg h-full w-full  hover:px-2 hover:py-2  ease-in duration-150' src={b5} alt="" />
                                </figure>
                                {/* body */}
                                <div className='py-8'>
                                    <div className='flex gap-5 items-center '>
                                        <div className='h-[2px] w-[55px] bg-black text-black'></div>
                                        <p className='uppercase'>toddler</p>
                                        <p className='text-slate-400'>Apr 2, 2023</p>
                                    </div>
                                    <h3 className='text-2xl font-semibold pt-4 pl-16'>How to choose the best toys?</h3>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>


            </div>
        </div>
    );
};

export default OurBlog;