import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../utilities/bannerImages/moneyTransform.jpg";
import "./SecondBanner.css";
const SecondBanner = () => {
  return (
    <section className="secondBannerContend py-5">
      <Container>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <h1>
              Simple & Easy Way To Manage <br /> <span className="headerMoney">Your Money</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam
              perspiciatis fuga natus sed magnam officiis at, accusantium sunt
              rem consequatur animi non, optio harum!
            </p>
            <button className="rechargeNow rounded">Recharge Now</button>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="SecondBannerImg">
              <img src={banner} className="w-100  " alt="" srcSet="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecondBanner;
