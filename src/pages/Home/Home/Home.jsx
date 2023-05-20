import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CreativeApproach from '../CreativeApproach/CreativeApproach';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Reviews from '../Reviews/Reviews';
import FeaturedSet from '../FeaturedSets/FeaturedSet';
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
                <FeaturedSet></FeaturedSet>
                <Reviews></Reviews>
            </div>
        </HelmetProvider>
    );
};

export default Home;