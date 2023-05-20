import React from 'react';
import NavBar from '../pages/share/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';
import Loading from '../pages/Loading/Loading';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div className='bg-[#fffaf7]'>
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ? <Loading></Loading> : ''
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;