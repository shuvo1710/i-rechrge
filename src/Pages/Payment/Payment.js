import React from 'react';
import PaymentForm from '../../Components/PaymentForm/PaymentForm';
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