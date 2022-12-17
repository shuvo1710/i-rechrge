import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';

const Main = () => {
    return (
        <div>
            <SubHeader></SubHeader>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;