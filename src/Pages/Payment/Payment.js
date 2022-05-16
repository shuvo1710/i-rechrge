import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PaymentForm from '../../Components/PaymentForm/PaymentForm';
import Progress2 from '../../Components/Progress2/Progress2';
import Features from '../../Components/Features/Features'
import SubHeader from '../../Components/SubHeader/SubHeader';

const Payment = () => {
    return (
        <div>
            <SubHeader/>
            <Header/>
            <Progress2/>
            <PaymentForm/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Payment;