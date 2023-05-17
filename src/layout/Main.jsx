import React from 'react';
import NavBar from '../pages/share/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#fffaf7]'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;