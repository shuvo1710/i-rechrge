import React from 'react';
import Accordions from '../../Components/Accordions/Accordions';
import Counter from '../../Components/Counter/Counter';
import Feature1 from '../../Components/Feature1/Feature1';
import Feature2 from '../../Components/Feature2/Feature2';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SecondBanner from '../../Components/SecondBanner/SecondBanner';

const FeaturePage = () => {
    return (
        <div>
            <Header/>
            <SecondBanner/>
            <Feature1/>
            <Feature2/>
            <Accordions/>
            <Counter/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default FeaturePage;