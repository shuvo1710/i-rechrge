import React from "react";
import Offer from "../../Components/Offer/Offer";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import OfferAndDisount from "../../Components/OfferAndDiscount/OfferAndDiscount";
import "./Home.css"
import ChooseUs from "../../Components/ChooseUs/ChooseUs"
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const data = {
    heading:'Online Mobile Recharge',
    img:'banner2.png',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus incidunt nulla magni iste? Doloremque repellendus, excepturi rerum sed qui quod adipisci, expedita ipsam possimus dolores et impedit totam necessitatibus nam quos culpa. Laborum dolore unde nesciunt consequuntur dignissimos, quod nihil, aperiam ad molestiae quaerat id, tenetur explicabo modi deleniti!'
  }
  return (
    <div>
        <Banner data={data}/>
        <RechargeMenu/>
        <Offer/>
        <Subscriptions/>
        <OfferAndDisount/>
        <ChooseUs/>
    
    </div>
  );
};
export default Home;
