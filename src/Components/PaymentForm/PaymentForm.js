import React from "react";
import { Container } from "react-bootstrap";
import "./PaymentForm.css";
import { BsBank2, BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import "./PaymentForm.css";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Notice from "./Notice/Notice";
import bank from "../../utilities/paymentImage/bank.jpg"
import card from "../../utilities/paymentImage/ebl2_200x100.jpg"
import paypalCard from "../../utilities/paymentImage/paypal_200x100.png"
import acceptedCard1 from "../../utilities/paymentImage/ebl.jpg"

const PaymentForm = () => {
  const { handleShow } = useAuth();
  const proceed = () => {
    handleShow();
  };
  return (
    <div className="paymentSection">
      <Container>
        <div className="paymentContainer ">
          <div className="row">
          <div className="col-12 col-md-12 col-lg-3 col-xl-3">
             <div className="paymentFormContainer">
             <h2 className="paymentHead text-center">We are Accepted</h2>
             <div className="pb-2">
              <img src={acceptedCard1} className="img-fluid " alt="" srcset="" />
             </div>
             <div className="pb-2">
              <img src={acceptedCard1} className="img-fluid" alt="" srcset="" />
             </div>
             <div>
              <img src={acceptedCard1} className="img-fluid" alt="" srcset="" />
             </div>
             </div>
          </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 ">
              <div className="paymentFormContainer">
                <h2 className="paymentHead text-center">Select A Payment Method</h2>
                <div className="paymentFrom">
                <div>
                <div className="payment-options">
                  <div className="position-relative positionAfter">
                    <div className=" mr-2 img-fluid backImg">
                      <img className="" src={bank} alt="" />
                    </div>
                     <div className="transitionText">
                        <BsBank2 className="fs-2" />
                         <span>Bank Transfer</span>
                     </div>
                  </div>
                  <div className="position-relative positionAfter">
                    <div className="mr-2 img-fluid backImg">
                      <img src={card} alt="" />
                    </div>
                     <div className="transitionText">
                        <BsFillCreditCard2BackFill className="fs-2" />
                         <span>Credit Card</span>
                     </div>
                  </div>
                  <div className="position-relative positionAfter">
                    <div className="mr-2 img-fluid backImg">
                      <img src={paypalCard} alt="" />
                    </div>
                     <div className="transitionText">
                        <FaPaypal className="fs-2" />
                         <span>Bank Transfer</span>
                     </div>
                  </div>
                </div>
                <form className="mt-3">
                  <div className="w-100">
                  <div className="mb-3 ">
                    <label htmlFor="">Name on Card</label>
                    <input
                      className="w-100 rounded border border-1 p-2"
                      type="text"
                      placeholder="Card Name"
                    />
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="">Card Holder Name</label>
                    <input
                      className="w-100 rounded border border-1 p-2"
                      type="text"
                      placeholder="Card Holder Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Card Number</label>
                    <input
                      className="w-100 rounded border border-1 p-2"
                      type="text"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                        <label htmlFor="">Month / Year</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Month / Year"
                          className="w-100 rounded border border-1 p-2"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                        <label
                          className="d-flex align-items-center justify-content-between"
                          htmlFor=""
                        />
                          CVV
                        <input type="text" placeholder="CVV Number" className="w-100 rounded border border-1 p-2" />
                      </div>
                    </div>
                  </div>
                  <div className="payButton">
                  <button onClick={proceed} className="proceed ">
                    Proceed to Pay
                  </button>
                  </div>
                  </div>
                </form>
                </div>
                </div>
              
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 col-xl-3">
              <div className="paymentFormContainer">
                <h2 className="paymentHead text-center">Amount to Pay</h2>
                <div className="border-bottom">
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <span>Date</span>
                    <span>28 April 2022</span>
                  </div>
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <span>Amount</span>
                    <span>$150</span>
                  </div>
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <div>
                      <span>Discount</span>
                      <span>(10% Off)</span>
                    </div>
                    <span>-$15</span>
                  </div>
                  <div className="mb-2 d-flex align-items-center justify-content-between">
                    <span>Vat</span>
                    <span>$2</span>
                  </div>
                </div>
                <div className="pt-2 d-flex align-items-center justify-content-between">
                  <span className="fw-bold fs-6">Total Amount</span>
                  <span className="fw-bold fs-6">$150</span>
                </div>
                <div className="notice w-100 pt-3">
                  <Notice/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentForm;
