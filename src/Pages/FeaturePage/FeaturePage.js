import React from "react";
import Accordions from "../../Components/Accordions/Accordions";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";

import Feature1 from "../../Components/Feature1/Feature1";
import Feature2 from "../../Components/Feature2/Feature2";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewCounter from "../../Components/NewCounter/NewCounter";
import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import SubHeader from "../../Components/SubHeader/SubHeader";

const FeaturePage = () => {
  return (
    <div>
      <SubHeader/>
      <Header />
      <SecondBanner />
      <Feature1 />
      <Feature2 />
      <Accordions />
      {/* <Counter /> */}
      <NewCounter/>
      <ChooseUs/>
      <Footer />
    </div>
  );
};

export default FeaturePage;
