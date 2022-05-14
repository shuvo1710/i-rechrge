import React from "react";
import "./ProfileTab.css";
const ProfileTab = () => {
  return (
    <div>
      <div className="row mt-2">
        <div className="col-12 col-md-12 col-lg-3 col-xl-3">
          <div className="balance balanceBg1">
            <h5>Balance</h5>
            <h2>500</h2>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3 col-xl-3">
          <div className="balance balanceBg2">
            <h5>Minutes</h5>
            <h2>500</h2>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3 col-xl-3">
          <div className="balance balanceBg3">
            <h5>Internet</h5>
            <h2>500</h2>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3 col-xl-3">
          <div className="balance balanceBg4">
            <h5>Points</h5>
            <h2>500</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
