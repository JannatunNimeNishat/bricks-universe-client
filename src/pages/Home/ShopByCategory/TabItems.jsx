import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const TabItems = ({tabToy}) => {
    console.log(tabToy);
    const {_id,img,toy_name,price,rating} = tabToy || {};
    return (
        <div className="card card-compact lg:w-[450px] mx-auto lg:h-[450px]  bg-base-100 shadow-xl mt-5">
        <figure className='overflow-hidden w-full lg:h-[350px] border'><img className=' h-full w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body ">
            {/* <div className='px-3'> */}
            <h2 className="card-title text-2xl font-bold">{toy_name}</h2>
            <p className='font-semibold'>Price: ${price}</p>


            <p className='font-semibold flex items-center'>Ratings: 

            <Rating className='text-center ml-2 mr-2' style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
            {rating}
            </p>
            <div className="card-actions justify-end mt-3 pb-3">
                <button className="btn bg-[#ee5684] border-0 w-full">View Details</button>
            </div>
            {/* </div> */}
        </div>
    </div>
    );
};

export default TabItems;4