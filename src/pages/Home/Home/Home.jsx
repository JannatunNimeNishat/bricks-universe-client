import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <Gallery></Gallery>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;