import React from "react";
import { Container, Form } from "react-bootstrap";
import "./PaymentForm.css";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import './PaymentForm.css'
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PaymentForm = () => {
    const history  = useHistory()
    const {handleShow} = useAuth()
    const proceed = () => {
        history.push('/success')
        handleShow()
    }
  return (
    <div className="paymentSection">
      <Container>
        <div className="paymentContainer my-5">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7 col-xl-7 p-1">
              <div className="paymentFormContainer">
                <h4>Select A Payment Method</h4>
                <div className="row my-3">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                    <div className="paymentOption paymentBg">
                      <BsFillCreditCard2BackFill className="fs-2" /><br />
                      <span>Credit Card</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                    <div className="paymentOption">
                      <FiRefreshCw className="fs-2" /><br />
                      <span>Bank Transfer</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                    <div className="paymentOption">
                      <FaPaypal className="fs-2" /><br />
                      <span>Paypal</span>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="">Name on Card</label>
                    <input className="w-100 rounded border border-1 p-2" type="text" placeholder="Card Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Card Number</label>
                    <input className="w-100 rounded border border-1 p-2" type="text" placeholder="Card Number" />
                  </div>
                  <div className="mb-3">
                      <div className="row">
                          <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                            <label htmlFor="">Month</label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                          <label htmlFor="">Year</label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-2">
                            <label htmlFor="">CVV</label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                          </div>
                      </div>
                  </div>
                  {/* <input className="py-1 px-3" type="submit" value="Proceed to Pay" /> */}
                  <button onClick={proceed} className="py-2 px-3 border-0 bg-primary text-light rounded" >Proceed to Pay</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5 col-xl-5">
              <div className="paymentFormContainer">
                 <h4>Amount to Pay</h4>
                 <div className="border-bottom pb-3">
                    <div className="my-2 d-flex align-items-center justify-content-between">
                        <span>Date</span>
                        <span>28 April 2022</span>
                    </div>
                    <div className="my-2 d-flex align-items-center justify-content-between">
                        <span>Amount</span>
                        <span>$150</span>
                    </div>
                    <div className="my-2 d-flex align-items-center justify-content-between">
                        <div>
                            <span>Discount</span><span>(10% Off)</span>
                        </div>
                        <span>-$15</span>
                    </div>
                    <div className="my-2 d-flex align-items-center justify-content-between">
                        <span>Vat</span>
                        <span>$2</span>
                    </div>
                 </div>
                 <div className="pt-2 d-flex align-items-center justify-content-between">
                    <span className="fw-bold fs-6">Total Amount</span>
                    <span className="fw-bold fs-6">$150</span>
                </div>
                <div className="notice">
                    <h6>i-Recharge</h6>
                    <p>[NB] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque quisquam vitae illo odio aliquam architecto assumenda recusandae repellendus, eos qui tem? Molestiae.</p>
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
