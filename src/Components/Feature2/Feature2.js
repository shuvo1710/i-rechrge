import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import featureImage from '../../utilities/feature2/Capture.PNG'
const Feature2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-5">
      <Container>
        <div className="row align-items-center">
          <div
            data-aos="zoom-in"
            className="col-12 col-md-12 col-lg-7 col-xl-7"
          >
            <img
              src={featureImage}
              alt=""
              className="w-100"
            />
          </div>
          <div
            data-aos="zoom-in"
            className="col-12 col-md-12 col-lg-5 col-xl-5"
          >
            <h1>
              <span className="refer">Refer Your Friends</span> and <br /> Get
              Discount or Offers
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus veritatis velit ipsum cum odit, aperiam hic neque,
              ducimus omnis dignissimos ut obcaecati animi. Sed, officia.
            </p>
            <button className="referbtn rounded">Refer Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature2;
