import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LandPhone = () => {
  const history = useHistory();
  const OrderNow = () => {
    history.push("/order");
  };
  return (
    <div className="rechargeItemMenu">
      <h3>Land Phone</h3>
      <form>
        <Form.Select
          className="mb-4 border-0 border-bottom rounded-0"
          aria-label="Default select example"
        >
          <option>Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
        </Form.Select>
        <InputGroup className="mb-4">
          <FormControl
            className="border-0 border-bottom rounded-0"
            aria-label="Amount (to the nearest dollar)"
            placeholder="Account Number"
          />
        </InputGroup>
        <button onClick={OrderNow} className="rechargeButton">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default LandPhone;
