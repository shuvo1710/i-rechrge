import React from 'react';
import "./OfferAndDiscount.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {  FreeMode, Autoplay } from "swiper";


import Bills from "./Bill.json"
const OfferAndDiscount = () => {


  return (
    <div className='container pt-5 '>
      <div className='mb-5'>
        <h2 className='discountHead'>Featured Offers</h2>
        <p>Get Best Offers & Discounts</p>
      </div>
      <div>
        <Swiper
          navigation={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[ Autoplay,FreeMode]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          
          {
            Bills.map(bill=>
            <SwiperSlide key={bill._id}>
              <div className="sliderContent">
                <div className='position-relative'>
                  <img src={require(`${process.env.REACT_APP_BILL_IMG}/${bill?.picture}`)} alt="" srcSet="" />
                  <div className="discountInfo">
                    <div>
                      <h5><span className='fs-2 fw-bold'>{bill?.discount}</span> OFF</h5>
                      <p className='m-0'>{bill?.offer}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>

    </div>
  );
};

export default OfferAndDiscount;