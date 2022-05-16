import React from "react";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OrderForm from "../../Components/OrderForm/OrderForm";
import Progress from "../../Components/Progress/Progress";
import SubHeader from "../../Components/SubHeader/SubHeader";

const Order = () => {
  return (
    <div>
      <SubHeader/>
      <Header />
      <Progress />
      <OrderForm />
      <Features />
      <Footer />
    </div>
  );
};

export default Order;
