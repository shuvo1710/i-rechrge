import React from "react";
import { Container } from "react-bootstrap";
import OfferSlider from "../OfferSlider/OfferSlider";
import Options from "../Options/Options";
import BroadBand from "../Recharge/BroadBand/BroadBand";

const BroadBandMenu = () => {
  return (
    <div className="rechargeMenu bg-transparent">
      <Container className="p-0">
        <div className="shadoW rounded">
          <Options />
          <div className="rechargeContainer">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                <OfferSlider />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <BroadBand />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BroadBandMenu;
