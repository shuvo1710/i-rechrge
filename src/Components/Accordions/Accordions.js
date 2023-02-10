import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Fade } from "react-reveal";
import img from "../../utilities/accordionImages/accordion.png";
import "./Accordions.css";

const Accordions = () => {


  return (
    <section className="accordions">
      <Container className="p-0">
        <div className="row align-items-center">
          <Fade left>
            <div

              className="col-12 col-md-12 col-lg-6 col-xl-6 h-50"
            >
              <img className="w-100 h-100" src={img} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div
              className="col-12 col-md-12 col-lg-6 col-xl-6"
            >

              <Accordion>
                <Accordion.Item >
                  <Accordion.Header>
                    Lorem ipsum dolor sit amet.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Accordions;
