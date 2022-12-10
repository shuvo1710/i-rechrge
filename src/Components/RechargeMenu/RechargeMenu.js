import React from "react";
import { Container } from "react-bootstrap";
import "./RechargeMenu.css";
// import OfferSlider from "../OfferSlider/OfferSlider";
import Mobile from "../Recharge/Mobile/RechargeForm";
import useAuth from "../../Hooks/useAuth";
import DTH from "../Recharge/DTH/DTH";
import BroadBand from "../Recharge/BroadBand/BroadBand";
import LandPhone from "../Recharge/LandPhone/LandPhone";
import Electricity from "../Recharge/Electricity/Electricity";
import Gas from "../Recharge/Gas/Gas";
import Water from "../Recharge/Water/Water";
import Options from "../Options/Options";
import offer1 from "../../utilities/rechargeSliderImages/offer1.png";
import offer2 from "../../utilities/rechargeSliderImages/offer2.png";
import offer3 from "../../utilities/rechargeSliderImages/offer3.png";
import Tv from "../Recharge/Tv/Tv";
import Metro from "../Recharge/Metro/Metro";
import Air from "../Recharge/Air/Air";
import NewOfferApp from "../NewOfferSlider/NewOfferApp"
const RechargeMenu = () => {
  
  const images = {
    img1: offer1,
    img2: offer2,
    img3: offer3,
  };
  return (
    <div>
        <Container className="p-0">
          <div className="rechargeMenu">
              <Options/>
              <Mobile />
          </div>
        </Container>
    </div>
  );
};

export default RechargeMenu;
