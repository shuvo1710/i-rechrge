import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const RechargeForm = () => {
  const history = useHistory();
  const OrderNow = () => {
    history.push("/order");
  };
  return (
    <div className="rechargeItemMenu">
      <h3>Mobile Recharge or Bill Payment</h3>
      <Form>
        <div key="inline-radio" className="mb-4">
          <Form.Check
            inline
            label="Prepaid"
            name="group1"
            type="radio"
            id="inline-radio-1"
          />
          <Form.Check
            inline
            label="PostPaid"
            name="group1"
            type="radio"
            id="inline-radio-2"
          />
        </div>
      </Form>
      <form>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
        <Form.Control
            type="text"
            placeholder="Mobile Number"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="border-0 border-bottom rounded-0"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Form.Select
          className="mb-4 border-0 border-bottom rounded-0"
          aria-label="Default select example"
        >
          <option>Select Your Operator</option>
          <option value="1">Grameen</option>
          <option value="2">Airtel</option>
          <option value="3">Banglalink</option>
        </Form.Select>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <InputGroup className="mb-4">
          <FormControl
            className="border-0 border-bottom rounded-0"
            aria-label="Amount (to the nearest dollar)"
            placeholder="$ Enter Amount"
          />
        </InputGroup>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <button onClick={OrderNow} className="rechargeButton w-100">
          Recharge Now
        </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default RechargeForm;
