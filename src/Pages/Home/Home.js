import React from "react";
import Slider from "../../Components/Slider/Slider";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Offer from "../../Components/Offer/Offer";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
import TopOffers from "../../Components/TopOffers/TopOffers";
import MobileMenu from '../../Components/MobileMenu/MobileMenu'
const Home = () => {
  return (
    <div className="bg-transparent">
      <Header/>
      <Slider/>
      {/* <Options/> */}
      <MobileMenu/>
      <Offer/>
      <Subscriptions/>
      <TopOffers/>
      <Features/>
      <Footer/>
    </div>
  );
};
export default Home;
