import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Offer from "../../Components/Offer/Offer";
import Options from "../../Components/Options/Options";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
const Home = () => {
  return (
    <div className="bg-transparent">
      <Header/>
      <Carousel/>
      <Options/>
      <RechargeMenu/>
      <Offer/>
      <Subscriptions/>
      <Features/>
      <Footer/>
    </div>
  );
};
export default Home;
