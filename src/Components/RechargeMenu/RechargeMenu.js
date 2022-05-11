import React from "react";
import { Container } from "react-bootstrap";
import "./RechargeMenu.css";
import OfferSlider from "../OfferSlider/OfferSlider";
import Mobile from "../Recharge/Mobile/Mobile";
import useAuth from "../../Hooks/useAuth";
import DTH from '../Recharge/DTH/DTH'
import BroadBand from '../Recharge/BroadBand/BroadBand'
import LandPhone from '../Recharge/LandPhone/LandPhone'
import Electricity from '../Recharge/Electricity/Electricity'
import Gas from '../Recharge/Gas/Gas'
import Water from '../Recharge/Water/Water'
const RechargeMenu = () => {
  const {activeState} = useAuth()
  return (
    <div className="rechargeMenu">
      <Container className="p-0">
        <div className="">
          <div className="rechargeContainer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-7 col-xl-7">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              {
                activeState === 'Mobile' && <Mobile />
              }
              {
                activeState === 'DTH' && <DTH />
              }
              {
                activeState === 'BroadBand' && <BroadBand/>
              }
              {
                activeState === 'LandPhone' && <LandPhone/>
              }
              {
                activeState === 'Electricity' && <Electricity/>
              }
              {
                activeState === 'Gas' && <Gas/>
              }
              {
                activeState === 'Water' && <Water/>
              }
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default RechargeMenu;
