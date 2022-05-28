import React from "react";
import { Container } from "react-bootstrap";
import "./Subscriptions.css";
import image from "../../utilities/subscription/subs.png";

const Subscriptions = () => {
  return (
    <div>
      <Container>
        <div className="subsContainer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="subscriptionText">
                <h2>i-Recharge</h2>
                <span>(Mobile Recharge Web Applications )</span>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora beatae nesciunt vitae laboriosam porro error
                  voluptates, optio animi libero saepe.
                </p>
                <button>Recharge Now</button>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-7">
              <div className="subscriptionImage">
                <img className="w-100 h-100" src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscriptions;
