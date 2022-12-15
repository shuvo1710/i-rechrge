import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Notice.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";


const Notice = () => {
    return (
        <>
            <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
                cssMode={true}
                navigation={false}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
            >
                <SwiperSlide className='border bgImage position-relative'>
                    <div className='position-absolute imgOverlay'>
                    </div>
                    <div className='text-center py-3 imgOverlay'>
                        <div className='noticeHeader'>
                            <h4 className='m-0 fs-3'>i-Recharge</h4>
                        </div>
                        <div className='noticeText'>
                            <p className='m-0 text-start'>[NB]:Lorem ipsum dolor sit amet consectetur start.Eligendi end magni harum 
                             doloremque,laborum aspernatur nemo! Rerum assumenda excepturieos.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='border bgImage position-relative'>
                    <div className='position-absolute imgOverlay'>
                    </div>
                    <div className='text-center py-3 imgOverlay'>
                        <div className='noticeHeader'>
                            <h4 className='m-0 fs-3'>i-Recharge2</h4>
                        </div>
                        <div className='noticeText'>
                            <p className='m-0 text-start'>[NB]:Lorem ipsum dolor sit amet consectetur start.Eligendi end magni harum 
                             doloremque, laborum aspernatur nemo! Rerum assumenda excepturieos.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='border bgImage position-relative'>
                    <div className='position-absolute imgOverlay'>

                    </div>
                    <div className='text-center py-3 imgOverlay'>
                        <div className='noticeHeader'>
                            <h4 className='m-0 fs-3'>i-Recharge3</h4>
                        </div>
                        <div className='noticeText'>
                            <p className='m-0 text-start'>[NB]:Lorem ipsum dolor sit amet consectetur start.Eligendi end magni harum 
                             doloremque, laborum aspernatur nemo! Rerum assumenda excepturieos.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
               
               
            </Swiper>
        </>
    );
};

export default Notice;