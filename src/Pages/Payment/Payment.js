import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PaymentForm from '../../Components/PaymentForm/PaymentForm';
import Progress2 from '../../Components/Progress2/Progress2';
import Features from '../../Components/Features/Features'
import SubHeader from '../../Components/SubHeader/SubHeader';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Banner from '../../Components/Banner/Banner';

const Payment = () => {
    const data = {
        heading:'Payment',
        img:'pageBanner.png',
        breadCrumb:[
          {
          title:'Home',
          link:'/home'
        },{
          title:'Payment',
          
        }
      ]
      }
    return (
        <div>
            <Banner data={data}/>
            {/* <Progress2/> */}
            <PaymentForm/>
            <ChooseUs/>
        </div>
    );
};

export default Payment;