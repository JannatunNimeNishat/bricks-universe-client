import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loading from '../Loading/Loading';
const MyToys = () => {
    const [myAddedToys, setMyAddedToys] = useState()
    const { user } = useContext(AuthContext);
    const [activeBtn, setActiveBtn] = useState(true);

    //load initial data 
    useEffect(() => {
        fetch(`https://bricks-universe-server.vercel.app/userAddedToys?seller_email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('bricks-universe')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setMyAddedToys(data)
            })
    }, [])


    //delete
    const handleDelateToy = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://bricks-universe-server.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remainingToys = myAddedToys.filter(myAddedToy => myAddedToy._id !== id)
                        setMyAddedToys(remainingToys);
                    })

            }
        })

        // 

    }

    const handleSortByPrice = (flag) => {
        setMyAddedToys()
        setActiveBtn(!activeBtn)
        fetch(`https://bricks-universe-server.vercel.app/toyPriceWise?seller_email=${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ tag: flag })
        })
            .then(res => res.json())
            .then(data => setMyAddedToys(data))


    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | My Toys</title>
            </Helmet>
            <div className='my-container mt-10 mb-10 min-h-[calc(100vh-68px)] px-5 lg:px-0'>
                <div>
                    <p className='text-xl font-semibold'>Sort by price:</p>

                    <button
                        className={`mt-6 ${activeBtn === true ? 'my-sort-btn' : ''}`}
                        onClick={() => handleSortByPrice(1)}>
                        Low to high
                    </button>

                    <button
                        className={` ml-2 mt-6 ${activeBtn === false ? 'my-sort-btn' : ''}`}
                        onClick={() => handleSortByPrice(-1)}

                    >

                        High to low</button>


                </div>


                {
                    myAddedToys ?
                        <div className="overflow-x-auto mt-8">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr className='text-center'>
                                        <th>#</th>
                                        <th>Seller</th>
                                        <th>Toy Name</th>
                                        <th>Sub-category</th>
                                        <th>Price</th>
                                        <th>Available Quantity</th>
                                        <th>Edit</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        myAddedToys?.map((myToy, index) => <MyToysRow
                                            key={myToy._id}
                                            myToy={myToy}
                                            index={index}
                                            handleDelateToy={handleDelateToy}
                                        ></MyToysRow>)
                                    }


                                </tbody>
                            </table>
                        </div>
                        :
                        <Loading className='-mt-20'></Loading>

                }
            </div>
        </HelmetProvider>
    );
};

export default MyToys;