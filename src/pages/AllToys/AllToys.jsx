import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRows from './ToyRows';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
const AllToys = () => {
    //loading all toys in route loader
    const allToys = useLoaderData()
    const [toys, setToys] = useState(allToys)


    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        fetch(`https://bricks-universe-server.vercel.app/searchAllToys/${searchInput}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [searchInput])



    //search
    const handleSearch = (event) => {
        fetch(`https://bricks-universe-server.vercel.app/searchAllToys/${searchInput}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }




    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | All Toys</title>
            </Helmet>
            <div className='my-container mt-10 mb-10 min-h-[calc(100vh-68px)]'>

                {/* search box */}
                <div className=' flex justify-center '>
                    <div className="form-control">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered"
                                onChange={(event) => setSearchInput(event.target.value)}
                            />
                            <button onClick={handleSearch} className="btn btn-square w-1/3 bg-[#ee5684] border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

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

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                              toys &&  toys?.map((toy, index) => <ToyRows
                                    key={toy._id}
                                    toy={toy}
                                    index={index}
                                ></ToyRows>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllToys;