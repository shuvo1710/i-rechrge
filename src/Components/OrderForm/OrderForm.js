import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./OrderForm.css";
import Aos from "aos";
import "aos/dist/aos.css";
const OrderForm = () => {
  const history = useHistory();

  const [promo, setPromo] = useState(false);
  const [promoButton, setPromoButton] = useState(true);
  const [appliedPromo, setAppliedPromo] = useState(false);
  const payment = () => {
    history.push("/payment");
  };
  const [promoModal, setPromoModal] = useState(false);
  const handleClose = () => {
    setPromoModal(false);
    setAppliedPromo(true);
  };
  const handleShow = () => setPromoModal(true);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const applyPromo = (e) => {
    e.preventDefault();
    handleShow();
    setPromo(false);
  };

  return (
    <div className="orderInfo mt-5">
      <Modal centered show={promoModal} onHide={handleClose}>
        <Modal.Header closeButton>Successful</Modal.Header>
        <Modal.Body>Successfully Your Promo Code has been applied</Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <div className="orderInfoContainer">
          <Table hover>
            <tbody>
              <tr>
                <td>Mobile Number</td>
                <td className="text-end">+985XXXXXXXXX</td>
              </tr>
              <tr>
                <td>Operator/Circle:</td>
                <td className="text-end">Vodafone | Gujarat</td>
              </tr>
              <tr>
                <td>Plan:</td>
                <td className="text-end">Mobile top-up</td>
              </tr>
              <tr>
                <td>Validity:</td>
                <td className="text-end">Talktime</td>
              </tr>
              <tr>
                <td>Amount:</td>
                <td className="text-end">$150</td>
              </tr>
            </tbody>
          </Table>
          {promo && (
            <div
              data-aos="zoom-in"
              className="text-center d-flex align-items-center justify-content-center"
            >
              <form onSubmit={applyPromo} className="promoForm rounded mb-3">
                <input
                  type="text"
                  name=""
                  className="border-0 rounded mx-auto p-1"
                  id=""
                  placeholder="Promo Code"
                />
                <input
                  className="border-0 formSubmit p-1"
                  type="submit"
                  value="Apply"
                />
              </form>
            </div>
          )}
          <div className="w-100 border border-info py-2 px-3 text-dark rounded d-flex align-items-center justify-content-between">
            <span>Payable Amount</span>
            <span>$150</span>
          </div>
          {promoButton && (
            <div className="text-center d-block">
              <button
                onClick={() => {
                  setPromo(true);
                  setPromoButton(false);
                }}
                className="border-0 bg-transparent mt-3"
              >
                Apply Promo-code
              </button>
            </div>
          )}
          {appliedPromo && (
            <div className="text-end">
              <span className="text-success">Promo Code Applied</span>
            </div>
          )}
          <br />
          <div className="text-center">
            <button onClick={payment} className="payBtn rounded">
              Pay Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderForm;
