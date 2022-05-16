import React from "react";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
import TopOffers from "../../Components/TopOffers/TopOffers";

const RechargePage = () => {
  return (
    <div>
      <SubHeader/>
      <Header />
      <RechargeMenu />
      <Subscriptions />
      <TopOffers />
      <Features />
      <Footer />
    </div>
  );
};

export default RechargePage;
