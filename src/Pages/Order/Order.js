import React from "react";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OrderForm from "../../Components/OrderForm/OrderForm";
import Progress from "../../Components/Progress/Progress";

const Order = () => {
  return (
    <div>
      <Header />
      <Progress />
      <OrderForm />
      <Features />
      <Footer />
    </div>
  );
};

export default Order;
