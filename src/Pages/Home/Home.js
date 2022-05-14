import React from "react";
import Slider from "../../Components/Slider/Slider";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Offer from "../../Components/Offer/Offer";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
import TopOffers from "../../Components/TopOffers/TopOffers";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import SubHeader from "../../Components/SubHeader/SubHeader";
const Home = () => {
  return (
    <div className="bg-transparent">
      <SubHeader/>
      <Header />
      <Slider />
      <RechargeMenu />
      <Offer />
      <Subscriptions />
      <TopOffers />
      <Features />
      <Footer />
    </div>
  );
};
export default Home;
