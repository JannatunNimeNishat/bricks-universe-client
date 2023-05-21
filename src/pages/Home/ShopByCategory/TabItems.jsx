import React, { useContext, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import '@smastrom/react-rating/style.css'


import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
const TabItems = ({ tabToy }) => {

    const { _id, photo, toyName, price, rating } = tabToy || {};
    const { user } = useContext(AuthContext);
    const navigate  = useNavigate();
    const location = useLocation()

    const handleViewDetails = (_id) => {
        if (!user) {
            Swal.fire({
                title: 'You have to login first',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.pathname=`/viewDetails/${_id}`
                    navigate('/login',{state:{from:location}}) 
                }
            })
        }
        else{
            navigate(`/viewDetails/${_id}`)
        }
    }

    useEffect(() => {
        AOS.init();
    }, [])



    return (

        <div className="card card-compact   bg-base-100 shadow-xl mt-5" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <figure className='overflow-hidden lg:h-[300px] rounded-2xl'>

                <LazyLoad>
                    <img className='px-14  hover:px-12 ease-in duration-100 h-full w-full rounded-xl' src={photo} alt="Shoes" />

                </LazyLoad>
            </figure>
            <div className="card-body ">

                <h2 className="card-title text-2xl font-bold">{toyName}</h2>
                <p className='font-semibold'>Price: ${price}</p>


                <p className='font-semibold flex items-center'>Ratings:

                    <Rating className='text-center ml-2 mr-2' style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                    {rating}
                </p>

                <div  className="card-actions justify-end mt-3 pb-3">
                    <button onClick={()=>handleViewDetails(_id)} className="btn bg-[#ee5684] hover:bg-[#df396b]  border-0 w-full">View Details</button>
                </div>
              
                <Toaster />

            </div>
        </div>
    );
};

export default TabItems; 