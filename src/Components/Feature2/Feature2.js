import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
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
              src="https://img.freepik.com/free-vector/content-team-concept-illustration_114360-4397.jpg?t=st=1652080168~exp=1652080768~hmac=7e2745865cf6e97cf2fe415dcb2bad67d3cbf8fac70155b9a0683b79c4f0a757&w=1380"
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
