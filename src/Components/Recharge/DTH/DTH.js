import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const DTH = () => {
    const history = useHistory();
    const OrderNow = () => {
      history.push("/order");
    };
    return (
        <div>
      <h3>DTH Recharge</h3>
      <form>
        <Form.Select className="mb-4 border-0 border-bottom rounded-0" aria-label="Default select example">
          <option>Select Your Operator</option>
          <option value="1">Operator 1</option>
          <option value="2">Operator 2</option>
          <option value="3">Operator 3</option>
        </Form.Select>
        
        <InputGroup className="mb-4">
          <FormControl
          className='border-0 border-bottom rounded-0'
            aria-label="Amount (to the nearest dollar)"
            placeholder="Amount To Pay"
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <FormControl
          className='border-0 border-bottom rounded-0'
            aria-label="Amount (to the nearest dollar)"
            placeholder="Account Number"
          />
        </InputGroup>
        <button onClick={OrderNow} className="w-100 rechargeButton">
          Recharhe Now
        </button>
      </form>
    </div>
    );
};

export default DTH;