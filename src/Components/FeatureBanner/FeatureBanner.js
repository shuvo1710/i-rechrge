import React from 'react';
import './FeatureBanner.css'
import image from "../../utilities/bannerImages/banner.png"

const FeatureBanner = () => {
    return (
        <div>
            <div className='featureImfHeight position-relative'>
                <img src={image} alt="" className='featureBannerImg' srcSet="" />
                <div className='bgOverlay position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center'>
                    <h1 className='featureBannerHead'>Our Feature</h1>
                </div>
            </div>
        </div>
    );
};

export default FeatureBanner;