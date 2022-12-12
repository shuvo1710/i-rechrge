import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./NotFound.css";
import image from "../../utilities/errorImage/404.png"

const NotFound = () => {

  return (
    <div className="errorPage">
      
      <div className="Error  align-items-center">
        <div className="DoubleFore">
        4
        <span className="routedFull"> <img src={image} alt="" srcset="" /></span>
        4
        </div>
        <h3 className="text-center">There's Nothing Here...</h3>
        <p className="text-center">..maybe the page you're looking for is not found or never existed</p>
        <div className="text-center backHomeBtn">
          <button>Back to home <span><BsArrowRight/></span></button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
