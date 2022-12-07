import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./NewOffer.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

export default function App(props) {
    const images = props?.images;
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        <div className="swiper-zoom-container ">
          <div className="w-100">
          <img className="d-block" src={images?.img1} alt="First slide" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className="w-100">
          <img className="d-block" src={images?.img2} alt="second slide" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-zoom-container ">
          <div className="w-100">
          <img className="d-block" src={images?.img3} alt="Third slide" />
          </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
