import React from 'react';
import { useLoaderData } from 'react-router-dom';
//tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
const ViewDetails = () => {
    const toy = useLoaderData()
    const { _id, photo, toy_name, price, rating, description, sub_category,seller_name,seller_email,quantity } = toy || {};
    console.log(toy);
    return (
        <HelmetProvider>
            <Helmet>
                <title>View details</title>
            </Helmet>
        <div className='mt-8 mb-8 my-container'>
            <div className='grid grid-cols-2 gap-8'>
                <div className=''>
                    <img className='h-full w-full' src={photo} alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-4xl font-semibold'>{toy_name}</h3>
                    <p className='text-[#ee5684] text-xl  font-semibold'>${price}</p>
                    <p>{description}</p>
                    {/* <div className='flex gap-3'> */}
                    <p><small>Only {quantity} pieces left</small></p>
                    <input className='border-2 mr-5 py-1 px-2 w-1/6 rounded-lg' type="number" defaultValue={1} name="" id="" />
                    <button className='px-5 text-white font-bold hover:bg-[#df396b]  py-3 bg-[#ee5684] rounded-lg'>Buy now</button>
                    {/* </div> */}
                    <br />
                    
                    <p><span className='font-semibold '>Categories:</span> {(sub_category).split('_').join(" ")}</p>
                    <p><span className='font-semibold '>Seller name:</span> {seller_name}</p>
                    <p><span className='font-semibold '>Seller email:</span> {seller_email}</p>
                    <p><span className='font-semibold'>Product Id: </span>{_id}</p>

                </div>

            </div>
            <div className='mt-16'>
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Reviews</Tab>

                    </TabList>

                    <TabPanel className='mt-8'>
                        <p>{description}</p>

                    </TabPanel>

                    <TabPanel className='mt-8'>
                        <div className='grid grid-cols-2'>
                            <div className='space-y-3'>
                                <h3 className='text-3xl font-bold'>Reviews</h3>
                                <p>There are no reviews yet.</p>
                            </div>
                            <div className='space-y-3'>
                                <h3 className='text-3xl font-bold'>Be the first to review "{toy_name}"</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form className=''>
                                    <p className='font-bold'>Name *</p>
                                    <input className='border border-b-2  w-1/2' type="text" name="" id="" />
                                    <p className='font-bold mt-3'>Email *</p>
                                    <input className='border border-b-2 w-1/2' type="email" name="" id="" />

                                    <p className='font-bold mt-3'>Your review *</p>
                                    {/* <input className='border border-b-2' type="te" name="" id="" /> */}
                                    <textarea className='border-2 w-1/2' name="" id="" cols="30" rows="5"></textarea>
                                    <div className='flex gap-2 mt-2'>
                                        <input type="checkbox" name="" id="" />
                                        <p>I agree that my submitted data is being collected and stored.</p>
                                    </div>
                                    <button className='mt-5 px-5 text-white font-bold hover:bg-[#df396b]  py-3 bg-[#ee5684] rounded-lg'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>



                </Tabs>
            </div>
        </div >
        </HelmetProvider>
    );
};

export default ViewDetails;