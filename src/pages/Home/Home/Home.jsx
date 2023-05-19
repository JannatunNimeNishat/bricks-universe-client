import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CreativeApproach from '../CreativeApproach/CreativeApproach';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Carousel></Carousel>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <CreativeApproach></CreativeApproach>
            </div>
        </HelmetProvider>
    );
};

export default Home;