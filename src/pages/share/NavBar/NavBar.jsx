import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

import mainLogo_bg from '../../../assets/mainLogo_removebg.png'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    //logOut
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })
    }

    const navItems = <>
        <li className='hover:underline'><NavLink className={({isActive}) => isActive ? 'my-active' : ''} to='/'>Home</NavLink></li>
        <li className='hover:underline'><NavLink className={({isActive}) => isActive ? 'my-active' : ''} to='/allToys'>All Toys</NavLink></li>
        <li className='hover:underline '><NavLink className={({isActive}) => isActive ? 'my-active' : ''} to='/myToys'>My Toys</NavLink></li>
        <li className='hover:underline'><NavLink className={({isActive}) => isActive ? 'my-active' : ''} to='/addAToy'>Add a toy</NavLink></li>
        <li className='hover:underline'><NavLink className={({isActive}) => isActive ? 'my-active' : ''} to='/blogs'>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar  my-container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems}


                    </ul>
                </div>
                {/* <Link to='/' className="btn btn-ghost normal-case text-xl">Bricks-Universe</Link> */}
                <Link to='/' className="btn btn-ghost w-1/2 h-1/2 lg:w-2/6 lg:h-2/6 normal-case text-xl">
                    <img className='lg:w-full lg:h-full' src={mainLogo_bg} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}

                </ul>
            </div>
            <div className="navbar-end  ">
                {
                    user ?
                        <>
                            <Link onClick={handleLogout} to='/login' className="my-btn ">Logout</Link>
                            <div className="avatar ml-5" title={user?.displayName}>
                                <div className="w-12 h-10 rounded-full">
                                    <img className='w-full h-full object-cover ' src={user?.photoURL} />
                                </div>
                            </div>
                        </>
                        :
                        <Link to='/login' className="my-btn ">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;