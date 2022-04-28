import React from "react";
import { Container } from "react-bootstrap";
import "./Options.css";
import { AiOutlineMobile,AiOutlineWifi,AiFillThunderbolt } from "react-icons/ai";
import { MdLocalGasStation } from "react-icons/md";
import { BsTelephone,BsDropletHalf } from "react-icons/bs";
import "./Options.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { RiComputerLine } from "react-icons/ri";
const Options = () => {
  return (
    <div className="optionsContainer">
      <Container className="container-bg">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <AiOutlineMobile className="text-light fs-3" />
              <span className="text-light d-block">Mobile</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <RiComputerLine className="text-light fs-3" />
              <span className="text-light d-block">DTH</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <AiOutlineWifi className="text-light fs-3" />
              <span className="text-light d-block">Broadband</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <BsTelephone className="text-light fs-3" />
              <span className="text-light d-block">Landphone</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <AiFillThunderbolt className="text-light fs-3" />
              <span className="text-light d-block">Electricity</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <MdLocalGasStation className="text-light fs-3" />
              <span className="text-light d-block">Gas</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <BsDropletHalf className="text-light fs-3" />
              <span className="text-light d-block">Water</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <AiOutlineMobile className="text-light fs-3" />
              <span className="text-light d-block">Mobile</span>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <div>
              <AiOutlineMobile className="text-light fs-3" />
              <span className="text-light d-block">Mobile</span>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Options;
