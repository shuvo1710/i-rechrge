import React from "react";
import { Container } from "react-bootstrap";
import "./RechargeMenu.css";
import OfferSlider from "../OfferSlider/OfferSlider";
import Mobile from "../Recharge/Mobile/Mobile";
import useAuth from "../../Hooks/useAuth";
import DTH from "../Recharge/DTH/DTH";
import BroadBand from "../Recharge/BroadBand/BroadBand";
import LandPhone from "../Recharge/LandPhone/LandPhone";
import School from "../Recharge/School/School";
import Electricity from "../Recharge/Electricity/Electricity";
import Gas from "../Recharge/Gas/Gas";
import Water from "../Recharge/Water/Water";
import Options from "../Options/Options";
import offer1 from "../../utilities/offer1.PNG";
import offer2 from "../../utilities/offer2.PNG";
import offer3 from "../../utilities/offer3.PNG";
import College from "../Recharge/College/College";
import Tv from "../Recharge/Tv/Tv";
import Metro from "../Recharge/Metro/Metro";
import Air from "../Recharge/Air/Air";
const RechargeMenu = () => {
  const { activeState } = useAuth();
  const images = {
    img1: offer1,
    img2: offer2,
    img3: offer3,
  };
  return (
    <div className="">
      <div className="rechargeBg"></div>
      <div className="rechargeMenu">
        <Container className="p-0">
          <Options />
          <div className="">
            <div className="rechargeContainer">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-1">
                  <div className="">
                    {activeState === "Mobile" && <Mobile />}
                    {activeState === "DTH" && <DTH />}
                    {activeState === "BroadBand" && <BroadBand />}
                    {activeState === "LandPhone" && <LandPhone />}
                    {activeState === "Electricity" && <Electricity />}
                    {activeState === "Gas" && <Gas />}
                    {activeState === "Water" && <Water />}
                    {activeState === "School Fee" && <School />}
                    {activeState === "Clge Fee" && <College />}
                    {activeState === "Television" && <Tv />}
                    {activeState === "Metro" && <Metro />}
                    {activeState === "Air" && <Air />}
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 p-1">
                  <OfferSlider images={images} />
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 p-1">
                  <OfferSlider images={images} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RechargeMenu;
