import React from 'react';
import Banner from './header/Banner';
import Order from '../components/order';
import Bistro from '../components/Bistro';
import OurMenu from '../components/OurMenu';
import ChefRecommends from '../components/ChefRecommends';
import Featured from '../components/Featured';
import Testimonial from '../components/Testimonial';
import CallUs from '../components/CallUs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Home</title>
            </Helmet>
            <Banner />
            <Order />
            <Bistro />
            <OurMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;