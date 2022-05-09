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
import { Link } from "react-router-dom";
const Options = () => {
  return (
    <div id="recharge" className="optionsContainer">
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
            <Link to="/home" className=" linkOption">
              <AiOutlineMobile className=" fs-3 iconContainer1" />
              <span className=" d-block">Mobile</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/dth" className=" linkOption">
              <RiComputerLine className=" fs-3 iconContainer2" />
              <span className=" d-block">DTH</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/broadBand" className=" linkOption">
              <AiOutlineWifi className=" fs-3 iconContainer3" />
              <span className=" d-block">Broadband</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <BsTelephone className=" fs-3 iconContainer4" />
              <span className=" d-block">Landphone</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <AiFillThunderbolt className=" fs-3 iconContainer1" />
              <span className=" d-block">Electricity</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <MdLocalGasStation className=" fs-3 iconContainer2" />
              <span className=" d-block">Gas</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <BsDropletHalf className=" fs-3 iconContainer3" />
              <span className=" d-block">Water</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <AiOutlineMobile className=" fs-3 iconContainer4" />
              <span className=" d-block">Mobile</span>
            </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="option text-center">
            <Link to="/home" className=" linkOption">
              <AiOutlineMobile className=" fs-3 iconContainer1" />
              <span className=" d-block">Mobile</span>
            </Link>
          </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Options;
