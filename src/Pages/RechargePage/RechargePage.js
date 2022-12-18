import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import RechargeMenu from "../../Components/RechargeMenu/RechargeMenu";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";


const RechargePage = () => {
  const data = {
    heading: 'Online Mobile Recharge',
    img: 'banner2.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus incidunt nulla magni iste? Doloremque repellendus, excepturi rerum sed qui quod adipisci, expedita ipsam possimus dolores et impedit totam necessitatibus nam quos culpa. Laborum dolore unde nesciunt consequuntur dignissimos, quod nihil, aperiam ad molestiae quaerat id, tenetur explicabo modi deleniti!',
    breadCrumb:[
      {
      title:'Home',
      link:'/home'
    },{
      title:'Recharge',
      
    }
  ]
  }
  return (
    <div>
      <Banner data={data} />
      <RechargeMenu />
      <Subscriptions />
      <ChooseUs/>
    </div>
  );
};

export default RechargePage;
