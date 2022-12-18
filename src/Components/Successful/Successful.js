import React from "react";
import { Container, Modal } from "react-bootstrap";
import "./Successful.css";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlinePrinter } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import successImg from "../../utilities/paymentImage/success.gif"
import { FaShare } from "react-icons/fa";

const Successful = () => {
  const { successful, handleClose } = useAuth();

  return (
    <div>
      <Modal show={successful} onHide={handleClose} centered size="">
        <div className="border-bottom  d-flex justify-content-between p-2 position-relative">
          <h5 className="m-0 ">Successfull</h5>
          <div className="">
           <span className="position-absolute  paymentModalClose">
           <AiOutlineClose onClick={handleClose}  className="mx-auto"/>
           </span>
          </div>
        </div>
        <div className="successfullMessage text-center">
          <div>
            <div className="succAnimation">
              <img src={successImg} alt="" className="w-100 h-100 img-fluid" />
            </div>
            <h4>Payment Successful</h4>
            <p>
              Your Payment is successful. Your will recieve an order
              confirmation email/sms shortly with the expected package you have
              choosen.
            </p>
            <div className="successButtons">
              <Link to="/home" className="proceed rounded mb-2 text-decoration-none m-1">
                Back to Home
              </Link>
              <Link to="/recharge" className="rechargeAgain text-decoration-none rounded mb-2 m-1">
                Recharge Again
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <Container>
        <div className="text-center my-5">
          <div className="invoice">
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">User Name</span>
              <span className="fs-6 text-dark">Mark Otto</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Number</span>
              <span className="fs-6 text-dark">+8801XXXXXXXXX</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Transaction ID</span>
              <span className="fs-6 text-dark">XPRJJHDF28</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Company</span>
              <span className="fs-6 text-dark">Lyca Mobile</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Date</span>
              <span className="fs-6 text-dark">07 May 2016</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Payment Method</span>
              <span className="fs-6 text-dark">Visa Card</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Approval Status</span>
              <span className="fs-6 text-dark">Approved</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
              <span className="fs-6 text-secondary">Amount Paid</span>
              <span className="fs-6 text-dark">$ 1500</span>
            </div>
          </div>
          <div className="actionsButtons mt-3">
            <div className="row">
              <div className="col-4 p-1">
                <button className="successBtn1 border-0  py-2 px-3 rounded">
                  Save <span><BiSave/></span>
                </button>
              </div>
              <div className="col-4 p-1">
                <button className="successBtn2 border-0 py-2 px-3 rounded">
                  Print <span><AiOutlinePrinter/></span>
                </button>
              </div>
              <div className="col-4 p-1">
                <button className="successBtn3 border-0  py-2 px-3 rounded">
                  Send <FaShare/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Successful;
