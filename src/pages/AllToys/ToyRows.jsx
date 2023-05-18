import React from 'react';
import { Link } from 'react-router-dom';

const ToyRows = ({toy,index}) => {
    console.log(toy);
    const {_id,seller_name,toyName,sub_category,price,quantity} = toy || {};
    return (
        <tr className='text-center'>
            <th>{index+1}</th>
            <td>{seller_name}</td>
            <td>{toyName}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td >
                <Link to={`/viewDetails/${_id}`} className=' bg-[#ee5684] hover:bg-[#df396b] py-2 px-2 rounded-lg font-bold text-white'>
                view details
                </Link>
            </td>
        </tr>
    );
};

export default ToyRows;