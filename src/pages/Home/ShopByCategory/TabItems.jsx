import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import { Link, useNavigate } from 'react-router-dom';
import '@smastrom/react-rating/style.css'


import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const TabItems = ({ tabToy }) => {

    const { _id, photo, toyName, price, rating } = tabToy || {};


    return (

        <div className="card card-compact   bg-base-100 shadow-xl mt-5">
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

                <div className="card-actions justify-end mt-3 pb-3">
                    <Link to={`/viewDetails/${_id}`} className="btn bg-[#ee5684] hover:bg-[#df396b]  border-0 w-full">View Details</Link>
                </div>
                <Toaster />

            </div>
        </div>
    );
};

export default TabItems; 