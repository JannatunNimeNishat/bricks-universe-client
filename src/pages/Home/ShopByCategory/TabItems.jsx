import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import { Link, useNavigate } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../provider/AuthProvider';

import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const TabItems = ({ tabToy }) => {

    const { _id, photo, toyName, price, rating } = tabToy || {};

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    //




   /*  const handleViewDetail = (_id) => {

        if (!user) {
         

            toast.error('Please login first', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate(`/login`)
        }
        else {

            navigate(`/viewDetails/${_id}`)
        }
    } */


    return (
        // <div className="card card-compact lg:w-[450px] mx-auto lg:h-[450px]  bg-base-100 shadow-xl mt-5">
        <div className="card card-compact   bg-base-100 shadow-xl mt-5">
            <figure className='overflow-hidden lg:h-[300px] rounded-2xl'>
                {/* <figure className='overflow-hidden w-full lg:h-[350px] border'> */}
                <LazyLoad>
                    <img className='px-6 py-6 h-full w-full rounded-xl' src={photo} alt="Shoes" />

                </LazyLoad>
            </figure>
            <div className="card-body ">
                {/* <div className='px-3'> */}
                <h2 className="card-title text-2xl font-bold">{toyName}</h2>
                <p className='font-semibold'>Price: ${price}</p>


                <p className='font-semibold flex items-center'>Ratings:

                    <Rating className='text-center ml-2 mr-2' style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                    {rating}
                </p>
                {/* <div onClick={() => handleViewDetail(_id)} className="card-actions justify-end mt-3 pb-3"> */}
                <div  className="card-actions justify-end mt-3 pb-3">
                    <Link to={`/viewDetails/${_id}`} className="btn bg-[#ee5684] border-0 w-full">View Details</Link>
                </div>
                <Toaster />
                {/* </div> */}
            </div>
        </div>
    );
};

export default TabItems; 