import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CreativeApproach from '../CreativeApproach/CreativeApproach';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <Gallery></Gallery>
           <ShopByCategory></ShopByCategory>
           <CreativeApproach></CreativeApproach>
        </div>
    );
};

export default Home;