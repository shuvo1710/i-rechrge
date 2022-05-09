import React from 'react';
import BroadBandMenu from '../../Components/BroadBandMenu/BroadBandMenu';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Offer from '../../Components/Offer/Offer';
import Carousel from '../../Components/Slider/Slider';
import Subscriptions from '../../Components/Subscriptions/Subscriptions';

const BroadBandPage = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <BroadBandMenu/>
            <Offer/>
            <Subscriptions/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default BroadBandPage;