import React from "react";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Offer from "../../Components/Offer/Offer";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";

import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import SubHeader from "../../Components/SubHeader/SubHeader";
import OfferAndDisount from "../../Components/OfferAndDiscount/OfferAndDiscount";
import "./Home.css"

import ChooseUs from "../../Components/ChooseUs/ChooseUs"
import Banner from "../../Components/Banner/Banner";
const Home = () => {
  
  return (
    <div className="bg-transparent">

        <SubHeader/>
        <Header/>
        <Banner></Banner>
        {/* <SwiperApp></SwiperApp>
        <RechargeMenu/> */}
        <Offer/>
        <Subscriptions/>
        <OfferAndDisount></OfferAndDisount>
        <ChooseUs></ChooseUs>
        <Footer/>
    </div>
  );
};
export default Home;
