import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import robi from "../../../utilities/robi.PNG";
import gp from "../../../utilities/gp.png";
import airtel from "../../../utilities/airtel-removebg-preview.png";
const OfferTab = () => {
  return (
    <div>
      <div className="allOffers">
        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={airtel} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>

        {/* <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={gp} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>
        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={robi} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>

        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={airtel} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>
        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={robi} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>

        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={airtel} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>
        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={robi} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div>

        <div className="singleOffer">
          <div className="offerHeader">
            <span className="text-dark fs-6">60 GB + 1200 Minutes</span>
            <div className="operatorImage">
              <img src={gp} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div className="offerContent">
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <span>
                <AiOutlineClockCircle /> 15 Days
              </span>
              <span className="py-0 px-2 rounded border border-primary">
                Prepaid
              </span>
              <span className="border-0 py-0 px-2 rounded bgPrimary text-light">
                ৳ 715
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OfferTab;
