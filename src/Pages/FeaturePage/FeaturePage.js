import React from "react";
import Accordions from "../../Components/Accordions/Accordions";
import Banner from "../../Components/Banner/Banner";

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
import CustomerReview from "../../Components/PaymentForm/CustomerReview/CustomerReview";
import SubHeader from "../../Components/SubHeader/SubHeader";

const FeaturePage = () => {
  const data = {
    heading:'Feature',
    img:'pageBanner.png',
    breadCrumb:[
      {
      title:'Home',
      link:'/home'
    },{
      title:'Feature',
      
    }
  ]
  }
  return (
    <div>
      <SubHeader/>
      <Header />
      <Banner data={data}/>
      {/* <SecondBanner /> */}
      {/* <Feature1 />
      <Feature2 /> */}
      <ExtraFeature/>
       <Rafer/>
      {/* <OnlineRechargeAndPay/> */}
      
      <Accordions />
      <Counter/>
      <CustomerReview/>
      <Footer />
    </div>
  );
};

export default FeaturePage;
