import React from "react";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";


const RechargePage = () => {
  return (
    <div>
      <SubHeader/>
      <Header />
      <RechargeMenu />
      <Subscriptions />
  
      <ChooseUs></ChooseUs>
      <Footer />
    </div>
  );
};

export default RechargePage;
