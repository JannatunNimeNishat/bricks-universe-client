import React from 'react';
import mainLogo_bg from '../../../assets/mainLogo_removebg.png'
import { FaArrowLeft, FaArrowRight, FaLocationArrow, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/mainLogo_removebg.png'
const Footer = () => {
    return (
        <div className=' bg-base-200'>
                <footer className="footer p-10 text-base-content ">
                <div>
                    <img className='h-20 w-20' src={mainLogo_bg} alt="" />
                    <div className='flex gap-2 border-2 p-2 mt-2'>
                        <FaMapMarker className='h-5 w-5' />
                        <p className='font-semibold'>United Kingdom</p>

                    </div>

                    <p className='mt-12'>BicksUnivers © 2023 - All right reserved</p>
                </div>
                <div>

                    <div className=''>
                        <p className='footer-title font-semibold'>Say Hello</p>
                        <input type="email" className='border-b-2 border-black  bg-base-200 mt-4' placeholder='bicks_univers@birks.com' name="" id="" />
                        <p className='mt-6 text-xl font-semibold'>+1 840 841 25 69</p>
                        <p className=' mt-5 footer-title font-semibold'>FOLLOW US</p>
                        <div className="grid grid-flow-col gap-4 mt-5">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/allToys' className="link link-hover">AllToys</Link>
                    <Link to='/myToys' className="link link-hover">My Toys</Link>
                    <Link to='/addAToy' className="link link-hover">Add a toy</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>

                    <div className='mt-4'>
                        <p className='footer-title'>SUBSCRIBE TO</p>
                        {/*  <div className='flex items-center'>
                    <input type="email" className='py-1' name="" id="" />
                    <FaArrowRight className='h-6 w-6 -m-6 '/>
                    </div> */}

                        <div className="form-control">

                            <label className="input-group">
                                <input type="email" placeholder="Your email " className="input input-bordered w-1/2 " />
                                <span className='bg-[#ee5684] border-0'>
                                    <FaArrowRight className='text-white h-5 w-5' />
                                </span>
                            </label>
                        </div>

                    </div>
                </div>
        </footer>
            </div>
    );
};

export default Footer;