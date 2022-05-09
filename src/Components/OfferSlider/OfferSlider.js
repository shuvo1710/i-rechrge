import React from 'react';
import { Carousel } from 'react-bootstrap';
import offerImage1 from '../../utilities/stylish-yellow-sale-banner-design_1017-14559.jpg'
const OfferSlider = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://previews.123rf.com/images/igorvkv/igorvkv1605/igorvkv160500506/56553115-verkauf-banner-template-design.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={offerImage1}
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