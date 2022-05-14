import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Feature1.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
                  src="https://www.paypal-prepaid.com/img/PayPal-Purple-MC-2017-Flat.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.ebl.com.bd/assets/cards/sub/Mastercard-Titanium-Debit-Card.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.ebl.com.bd/assets/cards/sub/Visa-Signature-Lite.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.ebl.com.bd/assets/cards/sub/ebl_gold_card_v2.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.cimbanque.com/cim/images/cards/mastercard/mastercard-silver-350.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.ucb.com.bd/images/cards/mastercard-platinum-card.png"
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
              src="https://img.shoplineapp.com/media/image_clips/5f7d31e35fb5be0014ff6958/original.gif?1602040291"
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
