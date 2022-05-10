import React from 'react';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Options from '../../Components/Options/Options';
import RechargeMenu from '../../Components/RechargeMenu/RechargeMenu'
import Subscriptions from '../../Components/Subscriptions/Subscriptions';
import TopOffers from '../../Components/TopOffers/TopOffers';

const RechargePage = () => {
    return (
        <div>
            <Header/>
            <Options/>
            <RechargeMenu/>
            <Subscriptions/>
            <TopOffers/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default RechargePage;