import React from "react";
import Accordions from "../../Components/Accordions/Accordions";
import Banner from "../../Components/Banner/Banner";
import Counter from "../../Components/Counter/Counter";
import ExtraFeature from "../../Components/ExtraFeature/ExtraFeature";
import CustomerReview from "../../Components/PaymentForm/CustomerReview/CustomerReview";
import Refer from "../../Components/Refer/Refer";




const FeaturePage = () => {
  const data = {
    heading: 'Feature',
    img: 'pageBanner.png',
    breadCrumb: [
      {
        title: 'Home',
        link: '/home'
      }, {
        title: 'Feature',

      }
    ]
  }
  return (
    <div>

      <Banner data={data} />
      <ExtraFeature />
      <Refer/>
      <Accordions />
      <Counter />
      <CustomerReview />
    </div>
  );
};

export default FeaturePage;
