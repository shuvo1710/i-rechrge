import React from "react";
import {
  Carousel,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./RechargeMenu.css";
import offerImage1 from '../../utilities/stylish-yellow-sale-banner-design_1017-14559.jpg'
const RechargeMenu = () => {
  const history = useHistory();
  const OrderNow = () => {
    history.push("/order");
  };
  return (
    <div className="rechargeMenu bg-transparent">
      <Container className="p-0">
        <div className="rechargeContainer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://previews.123rf.com/images/igorvkv/igorvkv1605/igorvkv160500506/56553115-verkauf-banner-template-design.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={offerImage1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/flat-akshaya-tritiya-sale-horizontal-banner-template_23-2149363811.jpg?w=1480&t=st=1650959360~exp=1650959960~hmac=2ce20c6dae6520d06a184ebcd28ae973747a9de613b69f2a7ee8cc86fe0397c4"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div>
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
                  <div className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                  </div>
                  <Form.Select
                    className="mb-4"
                    aria-label="Default select example"
                  >
                    <option>Select Your Operator</option>
                    <option value="1">Grameen</option>
                    <option value="2">Airtel</option>
                    <option value="3">Banglalink</option>
                  </Form.Select>
                  <InputGroup className="mb-4">
                    <InputGroup.Text className="bg-dark text-light border border-dark">$</InputGroup.Text>
                    <FormControl
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Enter Amount"
                    />
                    <InputGroup.Text className="bg-dark text-light border border-dark">.00</InputGroup.Text>
                  </InputGroup>
                  <button onClick={OrderNow} className="w-100 rechargeButton">
                    Recharge Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RechargeMenu;
