import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import signUpSchema from '../../schema/YupValidation';
import { AuthContext } from '../../provider/AuthProvider';

const initialValue = {
    name: '',
    email: '',
    password: '',
    photoURL: ''
}

const Register = () => {
    const {signUp,updateUserInformation,googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState();
    //formik to handle form 
    const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useFormik({
        initialValues: initialValue,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            const name = values.name;
            const email = values.email;
            const password = values.password;
            const photoURL = values.photoURL;
            // console.log(name,email);

            setRegisterError('')

            signUp(email,password)
            .then( result =>{
                const currentUser = result.user;

                 updateUserInformation(currentUser,name,photoURL)
                .then(()=>{
                    // console.log('user updated successfully');
                    navigate('/')
                })
                .then(error =>{
                    setRegisterError(error.message);
                })
                // console.log(result.user);
            })
            .catch(error=>{
                // console.log(error);
                setRegisterError(error.message) 
            })

            action.resetForm()
        }
    })

    const handleGoogleSignIn = ()=>{
        setRegisterError('')
        googleSignIn()
        .then(()=>{
            navigate('/')
        })
        .then(error=>{
            registerError(error.message)
        })
    }



    return (
        <div className=' md:flex justify-center mt-5 mb-5'>
        
            <div className='bg-slate-200 lg:w-96  px-12 lg:px-8 py-3 rounded'>
          
                <h3 className='text-2xl font-semibold mt-3'>Sign Up</h3>
                <form onSubmit={handleSubmit} className='mt-8 flex flex-col '>

                    <label >Name</label>
                    <input type="text" className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your name' name="name" 
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.name && touched.name
                            ?
                            <p className='text-[#ee5684]'><small>{errors.name}</small></p>
                            :
                            null
                    }
                    <label className='mt-3'>Email</label>
                    <input type="email" className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your email' name="email"  
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                {
                        errors.email && touched.email
                            ?
                            <p className='text-[#ee5684]'><small>{errors.email}</small></p>
                            :
                            null
                    }
                    <label className='mt-3'>password</label>
                    <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your password' type="password" name="password"  
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {
                        errors.password && touched.password
                            ?
                            <p className='text-[#ee5684]'><small>{errors.password}</small></p>
                            :
                            null
                    }
                    <label className='mt-3'>PhotoURL</label>
                    <input type="text" className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your PhotoURL' name="photoURL"  
                    value={values.photoURL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                     {
                        errors.photoURL && touched.photoURL
                            ?
                            <p className='text-[#ee5684]'><small>{errors.photoURL}</small></p>
                            :
                            null
                    }

                    <input className='mt-5 rounded py-2 text-white font-semibold bg-[#ee5684] hover:bg-[#df396b] cursor-pointer' type="submit" value="Register" />
                    {
                        registerError &&  <p className='text-[#ee5684] mt-2 mb-1 text-center'><small>{registerError}</small></p>
                    }
                    <p className='mt-2 text-center'><small>Already have an account ? <Link to='/login' className='font-semibold text-[#ee5684]'>Login</Link></small></p>
                </form>
                <div className="divider">OR</div>
                <div onClick={handleGoogleSignIn} className='mt-3  border-slate-300 border-2 py-2 rounded-xl flex cursor-pointer'>
                    <FaGoogle className='h-6 w-6' />
                    <p className=' w-full text-center'>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;