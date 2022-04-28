import React from "react";
import { Button, Carousel, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./RechargeMenu.css";

const RechargeMenu = () => {
  const history = useHistory()
  const OrderNow = () => {
    history.push('/order')
  }
  return (
    <div className="rechargeMenu bg-transparent">
      <Container>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-8 col-xl-8 p-1">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-vector/promotion-sale-labels-best-offers_206725-127.jpg?t=st=1650964335~exp=1650964935~hmac=85a259046a9e41a9e113716b0c516c3b1297823e214ffc8f854eccca51546633&w=1380"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-psd/abstract-mega-sale-background_1393-397.jpg?t=st=1650964335~exp=1650964935~hmac=100b306b9b9eddc61d02e4ab8098d9a743f8ae34c7471c23c121184201e68f61&w=1380"
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
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-1">
            <div>
              <h3>Mobile Recharge or Bill Payment</h3>
              <Form>
                <div key="inline-radio" className="mb-3">
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
                <div className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
                <Form.Select className="mb-3" aria-label="Default select example">
                  <option>Select Your Operator</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl aria-label="Amount (to the nearest dollar)" placeholder="Enter Amount" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Button onClick={OrderNow} className="w-100">Recharge Now</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RechargeMenu;
