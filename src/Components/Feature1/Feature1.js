import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Feature1.css";
import Aos from "aos";
import "aos/dist/aos.css";
import paypal from '../../utilities/paymentImage/paypal.png'
import ebl from '../../utilities/paymentImage/ebl.jpg'
import ebl2 from '../../utilities/paymentImage/ebl2.jpg'
import ebl3 from '../../utilities/paymentImage/ebl3.jpg'
import ucb from '../../utilities/paymentImage/ucb.png'
import animation from '../../utilities/gif/original.gif'

const Feature1 = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="featureOne">
      <Container>
        <div className="row align-items-center">
          <div
            data-aos="fade-right"
            className="col-12 col-md-6 col-lg-6 col-xl-6"
          >
            <h1>
              Easy Payment System With
              <br /> Your Bank Card
            </h1>
            <p>Transaction available with this card</p>
            <ul className="transaction">
              <li>
                <img
                  src={paypal}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={ebl}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={ebl2}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={ebl3}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={paypal}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={ucb}
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            className="col-12 col-md-6 col-lg-6 col-xl-6"
          >
            <img
              src={animation}
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature1;
