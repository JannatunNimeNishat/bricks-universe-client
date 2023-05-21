import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateToy = () => {
    const toyInformation = useLoaderData()


    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const initialValues = {
        photo: toyInformation?.photo,
        seller_name: user?.displayName,
        seller_email: user?.email,
        sub_category: toyInformation?.sub_category,
        price: toyInformation?.price,
        rating: toyInformation?.rating,
        quantity: toyInformation?.quantity,
        description: toyInformation?.description,
        tName: toyInformation?.toyName
    }


    const { values, error, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            const photo = values.photo;
            const toyName = values.tName;
            const seller_name = user?.displayName;
            const seller_email = user?.email;
            const sub_category = values.sub_category;
            const price = values.price;
            const rating = values.rating;
            const quantity = values.quantity;
            const description = values.description;


            const updatedToy = { photo, toyName, seller_name, seller_email, sub_category, price, rating, quantity, description };

            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {

                if (result.isConfirmed) {
                    
                    fetch(`https://bricks-universe-server.vercel.app/updateToy/${toyInformation?._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updatedToy)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {

                                Swal.fire('Saved!', '', 'success')
                            }

                            // navigate('/myToys')
                        })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })


            /* fetch(`https://bricks-universe-server.vercel.app/updateToy/${toyInformation?._id}`,{
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(updatedToy)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy has been updated',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
               
                navigate('/myToys')
            }) */



            // action.resetForm();
        }
    })






    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | Update Toy</title>
            </Helmet>
            <div className=' bg-cover bg-center pb-8'
            >
                <div className='my-container pt-5 mb-3'>

                    <div className='bg-slate-200  pt-3 px-5 py-5 '>
                        <div className='px-20 '>
                            <h3 className='text-3xl mt-5'>Update "{toyInformation.toyName}" Information</h3>

                            <form onSubmit={handleSubmit} className='mt-5'>
                                <label >ImageURL:</label>
                                <input type="text" name='photo' placeholder="Enter your toy's photoURL" className="input input-bordered w-full mb-3"
                                    value={toyInformation.photo}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />

                                <br />

                                <label className=''>Toy Name:</label>
                                <input type="text" name='tName' placeholder="Enter your toy's name" className="input input-bordered w-full mb-3"

                                    value={toyInformation.toyName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />


                                <br />


                                <label >Seller Name:</label>

                                <input type="text"
                                    name='seller_name'
                                    placeholder="Enter seller_name"
                                    className="input input-bordered w-full mb-3"
                                    value={user?.displayName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                />

                                <br />
                                <label >Seller Email:</label>

                                <input type="email" name='seller_email' placeholder="Enter seller email" className="input input-bordered w-full mb-3"
                                    value={user?.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                />



                                <br />

                                <label >Pick sub-category:</label>
                                <select className="select select-bordered  w-full mb-3"
                                    name='sub_category'
                                    value={toyInformation.sub_category}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    <option >Pick a sub-category</option>
                                    <option value='lego_action_figure' label="lego_action_figure">Lego action figure</option>
                                    <option value='lego_car' label="lego_car">Lego car</option>
                                    <option value='lego_city' label="lego_city">Lego city</option>

                                </select>

                                <br />

                                <label >Price: <small className='ml-3'>(changeable)</small></label>

                                <input className='input input-bordered w-full mb-3' placeholder='Enter the price of your toy' type="number" name='price'
                                    value={values.price}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />


                                <br />
                                <label >Rating:</label>

                                <div className="form-control ">


                                    <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full mb-3"
                                        value={toyInformation.rating}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                    />

                                </div>
                                {/* <div className="form-control md:w-1/2 ml-4"> */}


                                <label >Quantity: <small className='ml-3'>(changeable)</small></label>
                                <input type="number" name='quantity' placeholder="Enter the quantity of this toy" className="input input-bordered w-full mb-3"
                                    value={values.quantity}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />




                                <br />
                                <label >Description: <small className='ml-3'>(changeable)</small></label>
                                <div>
                                    <textarea placeholder='Write detail description of your toy' className=' p-2 w-full' name="description" id="" cols="30" rows="5"
                                        value={values.description}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                    ></textarea>
                                </div>
                                <input className='w-full mt-4 py-2 border text-white font-bold bg-[#ee5684] hover:bg-[#df396b]  cursor-pointer' type="submit" value="Update" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default UpdateToy;