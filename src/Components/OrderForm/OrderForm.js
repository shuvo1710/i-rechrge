import React from "react";
import { Container,Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./OrderForm.css";
const OrderForm = () => {
    const history  = useHistory()

    const payment = () => {
        history.push('/payment')
    }
  return (
    <div className="orderInfo mt-5">
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
          <div className="w-100 bg-primary py-2 px-3 text-light rounded d-flex align-items-center justify-content-between">
              <span>Payable Amount</span>
              <span>$150</span>
          </div>
          <div className="text-center d-block">
              <button className="border-0 bg-transparent mt-3">Apply Promo-code</button><br />
              <button onClick={payment} className="mt-3 border-0 bg-primary text-light py-2 px-4 rounded">Pay Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderForm;
