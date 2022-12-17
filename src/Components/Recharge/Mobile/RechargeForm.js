import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const RechargeForm = () => {
  const {activeState} = useAuth()

  return (
    <div className="rechargeItemMenu">
      { activeState === 'Mobile' ? <h3>Mobile Recharge or Bill Payment</h3> : <h3>{activeState} Bill Payment</h3>}
      <Form>
        <div key="inline-radio" className="mb-4">
          {
            activeState === 'Mobile' && <div>
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
          }
          
        </div>
      </Form>
      <form>
      <div className="row">
        {
          activeState === 'Mobile' ? <div className="col-12 col-md-6 col-lg-3">
          <Form.Control
              type="number"
              placeholder="Mobile Number"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className="border-0 border-bottom rounded-0 mobileInput"
            />
          </div>
          :
          <div className="col-12 col-md-6 col-lg-3">
        <Form.Control
            type="number"
            placeholder="Account Number"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="border-0 border-bottom rounded-0 mobileInput"
          />
        </div>

        }
        {
          activeState === 'Mobile' ? <div className="col-12 col-md-6 col-lg-3">
          <Form.Select
            className="mb-4 border-0 border-bottom rounded-0 optionColor rechargeOption"
            aria-label="Default select example"
          >
            <option>Select Your Operator</option>
            <option value="1">Grameen</option>
            <option value="2">Airtel</option>
            <option value="3">Banglalink</option>
          </Form.Select>
          </div> 
          :
          <div className="col-12 col-md-6 col-lg-3">
        <Form.Select
          className="mb-4 border-0 border-bottom rounded-0"
          aria-label="Default select example"
        >
          <option>Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
        </Form.Select>
        </div>
        }
        <div className="col-12 col-md-6 col-lg-3">
        <InputGroup className="mb-4">
          <FormControl
            className="border-0 border-bottom rounded-0 mobileInput"
            aria-label="Amount (to the nearest dollar)"
            placeholder="$ Enter Amount"
            type="number"
          />
        </InputGroup>
        </div>
        {
          activeState === 'Mobile' ? <div className="col-12 col-md-6 col-lg-3">
          <Link to="/payment"><button  className="rechargeButton w-100">
            Recharge Now
          </button></Link>
          </div>
          : 
          <div className="col-12 col-md-6 col-lg-3">
        <Link to="/payment"><button  className="rechargeButton w-100">
          Pay Now
        </button></Link>
        </div>
        }
      </div>
      </form>
    </div>
  );
};

export default RechargeForm;
