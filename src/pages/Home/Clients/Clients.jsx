import React, { useEffect } from 'react';
import c1 from '../../../assets/clients/c1t.webp'
import c2 from '../../../assets/clients/c2.webp'
import c3 from '../../../assets/clients/c3.webp'
import c4 from '../../../assets/clients/c4.webp'
import c5 from '../../../assets/clients/c5.webp'
import c6 from '../../../assets/clients/c6.png'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Clients = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-container py-10 px-5 lg:px-0' data-aos="fade-up">
            <div className='lg:flex gap-3'>
                <div className='lg:w-1/2 leading-10'>
                    <h3 className='text-left  my-active'>OUR CLIENTS</h3>
                    <h3 className='text-2xl lg:text-5xl text-left font-bold lg:mt-4 mb-3 lg:mb-16 my-primary-color '><span>Meet our top</span> <br />
                        <span className=''>clients & partners</span></h3>
                </div>
                <div className='lg:w-1/2 '>
                    <p className='lg:text-[20px] mt-8 text-slate-500'>We appreciate your trust greatly. Meet our regular clients & partners who choose us as their kids’ products supplier, and whom we are happy to work with.</p>
                    <p className='lg:text-[20px] mt-10 text-slate-500 '>To become an affiliate, please subscribe and/or contact our sales team for further instructions. Welcome to Juno!</p>
                </div>
            </div>
            <div className='mt-10 lg:mt-20 lg:px-20  lg:flex w-1/2 lg:w-full space-y-8 lg:space-y-0 mx-auto  justify-between'>
                <img src={c1} alt="" />
                <img src={c2} alt="" />
                <img src={c3} alt="" />
                <img src={c5} alt="" />
                <img src={c6} alt="" />
            </div>
        </div>
    );
};

export default Clients;