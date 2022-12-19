import React from 'react';
import {  MdKeyboardArrowRight,  } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = (props) => {
    const { heading, img, text, breadCrumb } = props?.data
    return (
        <section className='banner'>
            <div className='bannerImg'>
                <img src={require(`../../utilities/bannerImages/${img}`)} alt="" srcSet="" />
            </div>
            <div className='banner-content d-flex align-items-center'>
                    <div className='container'>
                        <div className='bannerText text-center'>
                            {
                                breadCrumb && <ul className='d-flex justify-content-center 
                                 align-items-center pb-4'>
                                    {
                                        breadCrumb?.map((item, i) => <li key={i}><Link 
                                            className='text-light' to={item?.link}>
                                            {item.title}</Link>{i === (breadCrumb.length - 
                                               1)
                                                ?
                                                ''
                                                :
                                                <MdKeyboardArrowRight />}</li>)
                                    }
                                </ul>
                            }
                            <h1 className='bannerHeading'>{heading}</h1>
                            {
                                text && <p>{text}</p>
                            }
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Banner;