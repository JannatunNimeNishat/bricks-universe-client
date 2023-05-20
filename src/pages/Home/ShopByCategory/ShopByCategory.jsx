import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabItems from './TabItems';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
const ShopByCategory = () => {

    const [categories, setCategories] = useState()
    const [tabToys, setTabToys] = useState();




    //loading category
    useEffect(() => {
        fetch('https://bricks-universe-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    //initial load action figure
    useEffect(() => {
        setTabToys()
        fetch('https://bricks-universe-server.vercel.app/toys?sub_category=lego_action_figure')
            .then(res => res.json())
            .then(data => setTabToys(data))
    }, [categories])


    //after each tab click
    const tabToy = (category_name) => {
        setTabToys();

        fetch(`https://bricks-universe-server.vercel.app/toys?sub_category=${category_name}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setTabToys(data)
                }
            })
    }




    return (


        <div className='mt-32 mb-12 my-container'>

            <h3 className='text-center  my-active'>SHOP BY CATEGORY</h3>
            <h3 className='text-5xl text-center font-bold mt-4 mb-16 my-primary-color'>We design toys not just for <br /> kids but with kids</h3>

            <Tabs >

                <TabList className=''>

                    <div className="tabs tabs-boxed bg-[#ee5684]  py-3">
                        {
                            categories && categories?.map(category => (
                                <Tab active className=' text-center w-full lg:w-1/4 mx-auto py-1 cursor-pointer'
                                    key={category._id}
                                >
                                    <Link onClick={() => tabToy(category.category_name)} className=" text-xl font-semibold text-black"> {(category.category_name).split('_').join(" ")} </Link>

                                </Tab>


                            ))
                        }
                    </div>

                </TabList>


                <TabPanel>
                    {

                        tabToys ?
                            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 px-14'>

                                {
                                    tabToys && tabToys?.map(tabToy =>
                                        <TabItems key={tabToy._id} tabToy={tabToy}></TabItems>

                                    )
                                }
                            </div>
                            :
                            <Loading></Loading>
                    }
                </TabPanel>

                <TabPanel>
                    {

                        tabToys ?
                            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 px-14'>
                                {
                                    tabToys && tabToys?.map(tabToy =>
                                        <TabItems key={tabToy._id} tabToy={tabToy}></TabItems>

                                    )
                                }
                            </div>
                            :
                            <Loading></Loading>
                    }
                </TabPanel>
            <TabPanel>
                    {
                        tabToys ?
                            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 px-14'>
                                {
                                    tabToys && tabToys?.map(tabToy =>
                                        <TabItems key={tabToy._id} tabToy={tabToy}></TabItems>

                                    )
                                }
                            </div>
                            :
                            <Loading></Loading>
                    }

                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ShopByCategory;