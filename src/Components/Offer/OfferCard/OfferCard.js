import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = ({ data, handleShow }) => {
    return (
        <div className="singleOffer" onClick={handleShow}>
            <div className="card-container1 cardPadding py-2">
                <div className="card-text-container">
                    <h4 className="offerText"><span className='fw-1 fs-3'>50%</span><br /> Discount</h4>
                </div>
                <div className="card-image-container">
                    <img src={data.img} className="w-100" alt="" />
                </div>
            </div>
            <div className=" cardPadding ">
                <div className='packageFlex'>
                <div className="packAgeInfo">
                    <p>Package Name</p>
                    <p>10 Days</p>
                </div>
                <p className='packageType'>Prepaid</p>
                </div>

                <div className="packageFlex ">
                    <div className="packAgeInfo">
                        <p>10 GB + 200 Mins</p>
                    </div>
                    <p className="packagePrice">200 TAKA</p>
                </div>
            </div>
            <div className="packageView py-2 px-1">
                <Link to="#">View Details</Link>
            </div>
        </div>
    );
};

export default OfferCard;