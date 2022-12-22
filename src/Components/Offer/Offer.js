import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import "./Offer.css";
import robi from "../../utilities/operatorImages/robi.png";
import gp from "../../utilities/operatorImagesNew/gp.png";
import voda from "../../utilities/operatorImagesNew/vodafone.png";
import du from "../../utilities/operatorImagesNew/du.png";
import airtel from "../../utilities/operatorImagesNew/airtel.png";
import mOne from "../../utilities/operatorImagesNew/mOne.png";
import startHub from "../../utilities/operatorImagesNew/starhub.png"
import offerImage from "../../utilities/operatorImageModal/operatorModal.png";


import OfferCard from "./OfferCard/OfferCard";
import { useQuery } from "@tanstack/react-query";
const Offer = () => {
  const [all, setAll] = useState(true);
  const [internet, setInternet] = useState(false);
  const [talkTime, setTalkTime] = useState(false);
  const [combo, setCombo] = useState(false);
  const [sms, setSms] = useState(false);


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

  const packages = [du, airtel, startHub, mOne, voda, gp]

const {data: packageList = [], isLoading} = useQuery({
  queryKey:['packageList'],
  queryFn: async () =>{
    const res = await fetch('http://192.168.68.116/paycharge/api/v1/package/index')
    const data = await res.json()
    return data
  }
})


  if(isLoading){
    return <div><h1>load....</h1></div>
  }
  // console.log(packageList.data)
  // const {} = offers;
  return (

    <>
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
            <h2 className=" offerHead text-center">Our Offer</h2>
            <p className="text-center m-0">Lorem ipsum dolor sit amet.</p>
            <div className="offersContainer">
              <div className="">
                <div className="tabsHeader">
                  <button
                    onClick={showAll}
                    className={`mx-3 ${all ? "activeBorder" : " "}`}
                  >
                    All
                  </button>

                  {/* {
                    packageList.map(singlePack => <button
                      onClick={showAll}
                      className={`mx-3 ${singlePack.name? "activeBorder" : " "}`}
                    >
                    {singlePack.name}
                    </button>)
                  } */}

                  <button
                    onClick={showInternet}
                    className={` mx-3 ${internet ? "activeBorder" : " "}`}
                  >
                    Internet
                  </button>
                  <button
                    onClick={showtalkTime}
                    className={` mx-3 ${talkTime ? "activeBorder" : " "}`}
                  >
                    Talktime
                  </button>
                  <button
                    onClick={showCombo}
                    className={` mx-3 ${combo ? "activeBorder" : ""}`}
                  >
                    Combo
                  </button>
                  <button
                    onClick={showSms}
                    className={`mx-3 ${sms ? "activeBorder" : " "}`}
                  >
                    Sms
                  </button> 
                </div>
                <div className="tabsContent">
                  {all && (               
                    <div className="allContent">
                      <div className="row g-3"> 
                        {
                          packages.map((_,i)=><div key={i} className="col-12 col-md-6 col-lg-4"><OfferCard data={{img:_}} handleShow={handleShow}/></div>)
                        }                       
                      </div>
                      <div className="text-center mt-5">
                        <button className="viewMore rounded">View More</button>
                      </div>
                    </div>
                  )}              
                  {internet && (
                    <div className="allContent">
                      <div className="row g-3">
                        {
                          packages.map((_, i) => <div key={i} className="col-12 col-md-6 col-lg-4"><OfferCard data={{ img: _ }} handleShow={handleShow} /></div>)
                          
                        }
                      </div>
                      <div className="text-center pt-5">
                        <button className="viewMore rounded">View More</button>
                      </div>
                    </div>
                  )}
                  {talkTime && (
                    <div className="allContent">
                      <div className="row g-3">
                        {
                          packages.map((_, i) => <div key={i} className="col-12 col-md-6 col-lg-4"><OfferCard data={{ img: _ }} handleShow={handleShow} /></div>)
                        }
                      </div>
                      <div className="text-center mt-5">
                        <button className="viewMore rounded">View More</button>
                      </div>
                    </div>
                  )}
                  {combo && (
                    <div className="allContent">
                      <div className="row g-3">
                        {
                          packages.map((_, i) => <div key={i} className="col-12 col-md-6 col-lg-4"><OfferCard data={{ img: _ }} handleShow={handleShow} /></div>)
                        }
                      </div>
                      <div className="text-center mt-5">
                        <button className="viewMore rounded">View More </button>
                      </div>
                    </div>
                  )}
                  {sms && (
                    <div className="allContent">
                      <div className="row g-3">
                        {
                          packages.map((_, i) => <div key={i} className="col-12 col-md-6 col-lg-4"><OfferCard data={{ img: _ }} handleShow={handleShow} /></div>)
                        }
                      </div>
                      <div className="text-center mt-5">
                        <button className="viewMore rounded">View More</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
    </>
  );
};

export default Offer;
