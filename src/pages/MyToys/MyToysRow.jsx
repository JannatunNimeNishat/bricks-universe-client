import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToysRow = ({myToy,index}) => {
    const {_id,seller_name,toyName,sub_category,price,quantity} = myToy || {};
    return (
        <tr className='text-center'>
        <th>{index+1}</th>
        <td>{seller_name}</td>
        <td>{toyName}</td>
        <td>{sub_category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td >
            <Link to={`/viewDetails/${_id}`} className=' bg-green-500 py-2  rounded-lg font-bold '>
            <FaEdit className='w-5 h-5'/>
            </Link>
        </td>
        <td >
            <Link to={`/viewDetails/${_id}`} className=' text-red-500 py-2  rounded-lg font-bold '>
           <FaTrash className='w-5 h-5' />
            </Link>
        </td>
    </tr>
    );
};

export default MyToysRow;