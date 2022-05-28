import React from "react";
import { Container } from "react-bootstrap";
import "./TopOffers.css";
import img from "../../utilities/discounts/featuredOffer.png";
import img2 from "../../utilities/discounts/featureOffer2.png";
import img3 from "../../utilities/discounts/featureOffer3.png";
import img4 from "../../utilities/discounts/featureOffer4.png";
const TopOffers = () => {
  return (
    <div className="discountSection">
      <Container>
        <div className="text-center">
          <h3>Top Offer and Discounts</h3>
          <p>Get upto 10% discount on special ocasion in every services</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
            <div className="featuredOffer position-relative">
              <img src={img4} alt="" className="w-100 h-100" />
              <div className="subFeaturedOffer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3">
                <div>
                  <h3 className="fw-bold">5% Off on Refer</h3>
                  <p>Refer your friend and get 5% off</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
            <div className="featuredOffer position-relative">
              <img src={img2} alt="" className="w-100 h-100" />
              <div className="subFeaturedOffer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3">
                <div>
                  <h3 className="fw-bold">5% Off on Electricity</h3>
                  <p>Get 5% off on electricity bill</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
            <div className="featuredOffer position-relative">
              <img src={img} alt="" className="w-100 h-100" />
              <div className="subFeaturedOffer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3">
                <div>
                  <h3 className="fw-bold">5% Off on Electricity</h3>
                  <p>Get 5% off on electricity bill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-1">
            <div className="featuredOffer position-relative">
              <img src={img2} alt="" className="w-100 h-100" />
              <div className="subFeaturedOffer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3">
                <div>
                  <h3 className="fw-bold">5% Off on Electricity</h3>
                  <p>Get 5% off on electricity bill</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-1">
            <div className="featuredOffer position-relative">
              <img src={img3} alt="" className="w-100 h-100" />
              <div className="subFeaturedOffer position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3">
                <div>
                  <h3 className="fw-bold">5% Off on Electricity</h3>
                  <p>Get 5% off on electricity bill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopOffers;
