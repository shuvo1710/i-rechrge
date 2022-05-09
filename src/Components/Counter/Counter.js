import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import './Counter.css'
const Counter = () => {
  return (
    <div className="py-5">
      <Container>
          <h1 className="text-center mb-3">Our Pleased Custommers</h1>
        <div className="row border rounded">
          <div className="col-12 col-md-6 col-lg-5 col-xl-5 text-center counterImg p-0">
            <img src="https://img.freepik.com/free-vector/group-people-different-nationalities-crowd-diverse-characters_316839-579.jpg?w=1380" alt="" className="w-100" />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-center p-2 d-flex align-items-center justify-content-center">
            
            <div className="counterContainer w-100">
              <div className="singleCounter">
                
                <CountUp duration={10.75} end={98150} className="fs-1 counterText" />
                <h5 className="m-0">User</h5>
              </div>
              <div className="singleCounter">
                
                <CountUp duration={10.75} end={98150} className="fs-1 counterText" />
                <h5 className="m-0">Custommer</h5>
              </div>
              <div className="singleCounter">
                
                <CountUp duration={10.75} end={98150} className="fs-1 counterText" />
                <h5 className="m-0">Followers</h5>
              </div>
              <div className="singleCounter">
                
                <CountUp duration={10.75} end={98150} className="fs-1 counterText" />
                <h5 className="m-0">Likes</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
