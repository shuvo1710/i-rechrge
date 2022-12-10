import React from "react";
import Accordions from "../../Components/Accordions/Accordions";

import Counter from "../../Components/Counter/Counter";
import ExtraFeature from "../../Components/ExtraFeature/ExtraFeature";
import Rafer from "../../Components/FAQ/Rafer/Rafer";


import Feature1 from "../../Components/Feature1/Feature1";
import Feature2 from "../../Components/Feature2/Feature2";
import FeatureBanner from "../../Components/FeatureBanner/FeatureBanner";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OnlineRechargeAndPay from "../../Components/OnlineRechargeAndPay/OnlineRechargeAndPay";
import SubHeader from "../../Components/SubHeader/SubHeader";

const FeaturePage = () => {
  return (
    <div>
      <SubHeader/>
      <Header />
      <FeatureBanner/>
      {/* <SecondBanner /> */}
      {/* <Feature1 />
      <Feature2 /> */}
      {/* <Accordions /> */}
     
      <Rafer/>
      <OnlineRechargeAndPay/>
      <Counter/>
      
     
      <ExtraFeature/>
      <Footer />
    </div>
  );
};

export default FeaturePage;
