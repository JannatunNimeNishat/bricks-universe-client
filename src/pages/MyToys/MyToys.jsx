import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const [myAddedToys,setMyAddedToys] = useState([])
    const {user} = useContext(AuthContext);
    useEffect(()=>{

        fetch(`http://localhost:5000/userAddedToys?seller_email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAddedToys(data))
   
    },[])
    return (
        <div className='my-container mt-10 mb-10 min-h-[calc(100vh-68px)]'>
            
            {/* search box */}
            {/* <div className=' flex justify-center '>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div> */}

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myAddedToys?.map((myToy, index) => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                index={index}
                            ></MyToysRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;