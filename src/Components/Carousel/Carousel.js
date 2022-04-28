import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Container } from "react-bootstrap";
import bannerImage from '../../utilities/3953918-removebg-preview.png'

const Carousel = () => {
  return (
    <div>
        <Container>
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
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="text-start py-5 px-2">
                                    <h2>Lorem ipsum dolor sit amet adipisicing elit.</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipi quidem vero et? Rem atque consequatur rerum molestias. In!</p>
                                    <button>Submit</button>
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
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="text-start py-5 px-2">
                                    <h2>Lorem ipsum dolor sit amet consectetur elit.</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adius adipisci quidem vero et? Rem atque consequatur rerum molestias. In!</p>
                                    <button>Submit</button>
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
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="text-start py-5 px-2">
                                    <h2 className="">Lorem ipsum dolor sit amet elit.</h2>
                                    <p>Lorem, ipsum dolor siserunt rerum ab non, ut necessitatibus adipisci quidem vee consequatur rerum molestias. In!</p>
                                    <button>Submit</button>
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
            </Swiper>
        </Container>

    </div>
  );
};

export default Carousel;
