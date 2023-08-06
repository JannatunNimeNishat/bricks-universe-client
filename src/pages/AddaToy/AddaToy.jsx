import { useFormik } from 'formik';
import React, { useContext } from 'react';

// import bg from '../../assets/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";

import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
const AddaToy = () => {

    const { user } = useContext(AuthContext)


    const initialValues = {
        photo: '',
        seller_name: user?.displayName,
        seller_email: user.email,
        sub_category: '',
        price: '',
        rating: '',
        quantity: '',
        description: '',
        tName:''
    }


    const { values, error, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            const photo = values.photo;
            const toyName = values.tName;
            const seller_name = values.seller_name;
            const seller_email = values.seller_email;
            const sub_category = values.sub_category;
            const price = values.price;
            const rating = values.rating;
            const quantity = values.quantity;
            const description = values.description;

            
            const newToy = { photo,toyName,seller_name,seller_email,sub_category,price,rating,quantity,description };
                console.log(newToy);
            //send data to the server
             fetch('https://bricks-universe-server.vercel.app/toy', {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(newToy)
             })
                 .then(res => res.json())
                 .then(data => {
                     console.log(data);
                     if (data.insertedId) {
                         Swal.fire({
                             position: 'top-end',
                             icon: 'success',
                             title: 'Your to is successfully added',
                             showConfirmButton: false,
                             timer: 1500
                         })
                     }
                 })

            action.resetForm();
        }
    })

    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | Add a Toys</title>
            </Helmet>
        <div className=' bg-cover bg-center mb-20 px-5 lg:px-0'
        >
            <div className='my-container pt-5  '>

                <div className='bg-slate-200  pt-8 px-5 pb-8 '>
                    <div className='lg:px-20 '>
                        <h3 className='text-3xl mt-5'>Add a toy</h3>

                        <form onSubmit={handleSubmit} className='mt-5'>
                           
                            <input type="text" name='photo' placeholder="Enter your toy's photoURL" className="input input-bordered w-full"
                                value={values.photo}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                           
                            <br />
                            <br />
                            <input type="text" name='tName' placeholder="Enter your toy's name" className="input input-bordered w-full"
                               
                                value={values.tName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                           
                           
                           
                            
                            <br />
                            <br />

                            {/* <div className='flex gap-3'> */}

                                <input type="text"
                                    name='seller_name'
                                    placeholder="Enter seller_name"
                                    className="input input-bordered w-full"
                                    value={values.seller_name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                               
                                />

        <br />
        <br />

                                <input type="email" name='seller_email' placeholder="Enter seller email" className="input input-bordered w-full"
                                    value={values.seller_email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                
                                />


                            {/* </div> */}
                            <br />
                            <br />
                            {/* <div className='flex gap-3 '> */}
                                <select className="select select-bordered w-full"
                                name='sub_category'
                                    value={values.sub_category}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    <option >Pick a sub-category</option>
                                    <option value='lego_action_figure' label="lego_action_figure">Lego action figure</option>
                                    <option value='lego_car' label="lego_car">Lego car</option>
                                    <option value='lego_city' label="lego_city">Lego city</option>

                                </select>
                                <br />
                                <br />
                                <input className='input input-bordered w-full' placeholder='Enter the price of your toy' type="number" name='price'
                                    value={values.price}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            {/* </div> */}

                            <br />
                            <br />
                            {/* <div className='flex '> */}
                                <div className="form-control ">


                                    <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full"
                                        value={values.rating}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                    />

                                </div>
                                <br />
                                <div className="form-control  ">


                                    <input type="number" name='quantity' placeholder="Enter the quantity of this toy" className="input input-bordered w-full"
                                        value={values.quantity}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />

                                </div>
                            {/* </div> */}
                            <br />
                            <div>
                                <textarea placeholder='Write detail description of your toy' className=' p-2 w-full' name="description" id="" cols="30" rows="5"
                                    value={values.description}
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                ></textarea>
                            </div>
                            <input className='w-full mt-4 py-2 border text-white font-bold bg-[#ee5684] hover:bg-[#df396b]  cursor-pointer' type="submit" value="Add" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default AddaToy;