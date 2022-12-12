import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";


const RechargePage = () => {
  const data = {
    heading:'Online Mobile Recharge',
    img:'banner.png',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus incidunt nulla magni iste? Doloremque repellendus, excepturi rerum sed qui quod adipisci, expedita ipsam possimus dolores et impedit totam necessitatibus nam quos culpa. Laborum dolore unde nesciunt consequuntur dignissimos, quod nihil, aperiam ad molestiae quaerat id, tenetur explicabo modi deleniti!'
  }
  return (
    <div>
      <SubHeader/>
        <Header/>
        <Banner data={data}/>
        <RechargeMenu/>
      <Subscriptions />
      <ChooseUs></ChooseUs>
      <Footer />
    </div>
  );
};

export default RechargePage;
