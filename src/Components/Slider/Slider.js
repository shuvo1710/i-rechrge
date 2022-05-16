import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Container } from "react-bootstrap";
import bannerImage from "../../utilities/3953918-removebg-preview.png";
import bannerImage3 from "../../utilities/5138237.jpg";
import bannerImage2 from "../../utilities/banner1.PNG";

const Carousel = () => {
  return (
    <div>
      <Container className="p-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="gradiant">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="text-start py-5 px-2">
                    <h2 className="text-orange">Easy and Friendly User Interface in i-Recharge</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipi quidem vero
                      et? Rem atque consequatur rerum molestias. In!
                    </p>
                    <button className="rounded">Visit Now</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div>
                    <img src={bannerImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gradiant">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="text-start py-5 px-2">
                    <h2 className="text-orange">Highly Secured for User and Admin Side both</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adius adipisci
                      quidem vero et? Rem atque consequatur rerum molestias. In!
                    </p>
                    <button className="rounded">Visit Now</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div>
                    <img src={bannerImage2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gradiant">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="text-start py-5 px-2">
                    <h2 className="text-orange">24/7 Hour Support For User in any Problems</h2>
                    <p>
                      Lorem, ipsum dolor siserunt rerum ab non, ut
                      necessitatibus adipisci quidem vee consequatur rerum
                      molestias. In!
                    </p>
                    <button className="rounded">Visit Now</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <div>
                    <img src={bannerImage3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Carousel;
