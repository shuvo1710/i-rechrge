import React from 'react';
import DTHMenu from '../../Components/DTHMenu/DTHMenu';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Offer from '../../Components/Offer/Offer';
import Carousel from '../../Components/Slider/Slider';
import Subscriptions from '../../Components/Subscriptions/Subscriptions';

const DTHPage = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <DTHMenu/>
            <Offer/>
            <Subscriptions/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default DTHPage;