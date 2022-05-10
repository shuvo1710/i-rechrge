import React from "react";
import { Container, Tabs } from "react-bootstrap";
import OfferSlider from "../OfferSlider/OfferSlider";
import BroadBand from "../Recharge/BroadBand/BroadBand";
import DTH from "../Recharge/DTH/DTH";
import LandPhone from "../Recharge/LandPhone/LandPhone";
import Mobile from "../Recharge/Mobile/Mobile";
import "./Tab.css";

const Tab = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="mobile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="mobile" title="Mobile">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <Mobile />
            </div>
          </div>
        </Tab>
        <Tab eventKey="broadBand" title="BroadBand">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <BroadBand />
            </div>
          </div>
        </Tab>
        <Tab eventKey="dth" title="DTH">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <DTH />
            </div>
          </div>
        </Tab>
        <Tab eventKey="land" title="Land Phone">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <LandPhone/>
            </div>
          </div>
        </Tab>
        <Tab eventKey="electric" title="Electricity">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <LandPhone/>
            </div>
          </div>
        </Tab>
        <Tab eventKey="gas" title="Gas">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <LandPhone/>
            </div>
          </div>
        </Tab>
        <Tab eventKey="water" title="Water">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <LandPhone/>
            </div>
          </div>
        </Tab>
        <Tab eventKey="bkash" title="Bkash">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <OfferSlider />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <LandPhone/>
            </div>
          </div>
        </Tab>
      </Tabs>
     
    </Container>
  );
};

export default Tab;
