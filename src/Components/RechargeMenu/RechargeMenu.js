import React from "react";
import { Container } from "react-bootstrap";
import "./RechargeMenu.css";
// import OfferSlider from "../OfferSlider/OfferSlider";
import Mobile from "../Recharge/Mobile/RechargeForm";
import Options from "../Options/Options";

const RechargeMenu = () => {

  return (
    <div className="">
        <Container className="p-0 bgRechargeMenu">
          <div className="rechargeMenu">
              <Options/>
              <Mobile />
          </div>
        </Container>
    </div>
  );
};

export default RechargeMenu;
