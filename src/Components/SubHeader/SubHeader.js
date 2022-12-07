import React from "react";
import { Container } from "react-bootstrap";
import { BsFillTelephonePlusFill, BsFillEnvelopeFill } from "react-icons/bs";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subHeader">
      <Container>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p className="m-0">Need any help? Please Contact With Us.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="contactAndEmail">
              <div className="callContainer d-flex align-items-center">
                <BsFillTelephonePlusFill className="me-1" />
                <span className="contactNumber">+88-54521821</span>
              </div>
              <div className="emailContainer d-flex align-items-center">
                <BsFillEnvelopeFill className="me-1" />
                <span>example@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
