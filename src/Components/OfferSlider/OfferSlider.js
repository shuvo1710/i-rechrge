import React from 'react';
import { Carousel } from 'react-bootstrap';
const OfferSlider = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://static.vecteezy.com/system/resources/previews/003/631/946/original/merry-christmas-and-happy-new-year-sale-banner-with-realistic-red-decoration-vector.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/eid-sale-banner-poster-design-with-50-discount-offer-cresce_1302-18473.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/flat-akshaya-tritiya-sale-horizontal-banner-template_23-2149363811.jpg?w=1480&t=st=1650959360~exp=1650959960~hmac=2ce20c6dae6520d06a184ebcd28ae973747a9de613b69f2a7ee8cc86fe0397c4"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
        </div>
    );
};

export default OfferSlider;