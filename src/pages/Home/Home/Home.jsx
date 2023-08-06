import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CreativeApproach from '../CreativeApproach/CreativeApproach';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Reviews from '../Reviews/Reviews';
import OurBlog from '../OurBlog/OurBlog';

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | Home</title>
            </Helmet>
            <div>
                <Carousel></Carousel>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <CreativeApproach></CreativeApproach>
                <Reviews></Reviews>
                <OurBlog></OurBlog>
            </div>
        </HelmetProvider>
    );
};

export default Home;