import React from 'react';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Progress3 from '../../Components/Progress3/Progress3';
import Successful from '../../Components/Successful/Successful';
import './Success.css'

const Success = () => {
    return (
        <div>
            <Header/>
            <Progress3/>
            <Successful/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Success;