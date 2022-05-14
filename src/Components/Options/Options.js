import React from "react";
import { Container } from "react-bootstrap";
import "./Options.css";
import "./Options.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useAuth from "../../Hooks/useAuth";

const Options = () => {
  const { activeTab, navItems } = useAuth();
  return (
    <div id="recharge" className="optionsContainer">
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 7,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 10,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {navItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="option text-center">
                <button
                  onClick={() => activeTab(item.linkName)}
                  className="linkOption"
                >
                  {item.iconName}
                  <span className=" d-block">{item.linkName}</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Options;
