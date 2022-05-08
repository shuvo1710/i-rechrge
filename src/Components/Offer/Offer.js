import React, { useState } from "react";
import { Container, Modal, Spinner } from "react-bootstrap";
import "./Offer.css";
import robi from "../../utilities/robi.PNG";
import gp from "../../utilities/gp.png";
import airtel from "../../utilities/airtel-removebg-preview.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import offerImage from "../../utilities/3777.jpg";
const Offer = () => {
  const [all, setAll] = useState(true);
  const [internet, setInternet] = useState(false);
  const [talkTime, setTalkTime] = useState(false);
  const [combo, setCombo] = useState(false);
  const [sms, setSms] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const showAll = () => {
    setAll(true);
    setInternet(false);
    setTalkTime(false);
    setCombo(false);
    setSms(false);
  };
  const showInternet = () => {
    setAll(false);
    setInternet(true);
    setTalkTime(false);
    setCombo(false);
    setSms(false);
  };
  const showtalkTime = () => {
    setAll(false);
    setInternet(false);
    setTalkTime(true);
    setCombo(false);
    setSms(false);
  };
  const showCombo = () => {
    setAll(false);
    setInternet(false);
    setTalkTime(false);
    setCombo(true);
    setSms(false);
  };
  const showSms = () => {
    setAll(false);
    setInternet(false);
    setTalkTime(false);
    setCombo(false);
    setSms(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  setTimeout(() => {
    setSpinner(false);
  }, 2000);
  return (
    <>
      {spinner ? (
        <div className="text-center">
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <section className="offerSection">
          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="d-flex">
                <div className="operatorImage">
                  <img src={robi} alt="" className="w-100 h-100" />
                </div>
                <span className="ms-3">Robi</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-12 col-md-5 col-lg-6 col-xl-6">
                  <img src={offerImage} alt="" className="w-100 h-100" />
                </div>
                <div className="col-12 col-md-7 col-lg-6 col-xl-6">
                  <h2>Offer for amount of $6.00</h2>
                  <p>60 GB Internet</p>
                  <p>1200 Minutes with all Operator</p>
                  <p>30 Days Validity</p>
                  <p>10 Cents Callrate to all Operator</p>
                  <p>40 Bonus Points</p>
                  <div>
                    <button className="py-2 px-3 iconContainer1 border-0 text-light ">
                      Recharge Now
                    </button>
                    <button className="py-2 px-3 iconContainer2 border-0 text-light ms-2">
                      Gift Friends
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Container>
            <h3 className="mb-3 text-center">Our Offer</h3>
            <div className="offersContainer">
              <div>
                <div className="tabsHeader">
                  <button
                    onClick={showAll}
                    className="border-0 bg-transparent mx-3"
                  >
                    All
                  </button>
                  <button
                    onClick={showInternet}
                    className="border-0 bg-transparent mx-3"
                  >
                    Internet
                  </button>
                  <button
                    onClick={showtalkTime}
                    className="border-0 bg-transparent mx-3"
                  >
                    Talktime
                  </button>
                  <button
                    onClick={showCombo}
                    className="border-0 bg-transparent mx-3"
                  >
                    Combo
                  </button>
                  <button
                    onClick={showSms}
                    className="border-0 bg-transparent mx-3"
                  >
                    Sms
                  </button>
                </div>
                <div className="tabsContent mt-5">
                  {all && (
                    <div className="allContent text-center">
                      <h1>All</h1>
                      <div className="allOffers">
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
                            <div className="operatorImage">
                              <img
                                src={airtel}
                                alt=""
                                className="w-100 h-100"
                              />
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <div onClick={handleShow} className="singleOffer">
                          <div className="offerHeader">
                            <span className="text-dark fs-6">
                              60 GB + 1200 Minutes
                            </span>
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
                                $ 6.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-5">
                        <button className="viewMore rounded">View More</button>
                      </div>
                    </div>
                  )}
                  {internet && (
                    <div className="internet text-center">
                      <h1>internet</h1>
                      <div className="allContent text-center">
                        <div className="allOffers">
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-5">
                          <button className="viewMore rounded">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {talkTime && (
                    <div className="talktime text-center">
                      <h1>talktime</h1>
                      <div className="allContent text-center">
                        <div className="allOffers">
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-5">
                          <button className="viewMore rounded">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {combo && (
                    <div className="combo text-center">
                      <h1>combo</h1>
                      <div className="allContent text-center">
                        <div className="allOffers">
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-5">
                          <button className="viewMore rounded">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {sms && (
                    <div className="sms text-center">
                      <h1>sms</h1>
                      <div className="allContent text-center">
                        <div className="allOffers">
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={robi}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>

                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
                              <div className="operatorImage">
                                <img
                                  src={airtel}
                                  alt=""
                                  className="w-100 h-100"
                                />
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div onClick={handleShow} className="singleOffer">
                            <div className="offerHeader">
                              <span className="text-dark fs-6">
                                60 GB + 1200 Minutes
                              </span>
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
                                  $ 6.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-5">
                          <button className="viewMore rounded">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Offer;
