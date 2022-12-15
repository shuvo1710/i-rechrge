import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import "./Progress2.css"

const Progress2 = () => {
  return (
    <div>
      <Container>
        <div className="  m-auto">
          <div className="allprogress position-relative">
          <div className="singleProgress">
            Order <br />
            <Link to="/home">
              <AiFillCheckCircle className="text-success" />
            </Link>
          </div>
          <div className="singleProgress">
            Summary <br />
            <Link to="/home">
              <AiFillCheckCircle className="text-success" />
            </Link>
          </div>
          <div className="singleProgress">
            Payment <br />
            <Link to="/home">
              <FaRegDotCircle className="text-success" />
            </Link>
          </div>
          <div className="singleProgress">
            Done <br />
            <Link to="/home">
              <FaRegDotCircle className="text-success" />
            </Link>
          </div>
          <div className="position-absolute oneLine">

          </div>
          
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Progress2;
