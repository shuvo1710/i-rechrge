import React from "react";
import { Carousel } from "react-bootstrap";
const OfferSlider = (props) => {
  const images = props?.images;
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={images?.img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images?.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={images?.img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OfferSlider;
