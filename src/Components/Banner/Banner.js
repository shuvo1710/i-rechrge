import React from 'react';
import {  MdKeyboardArrowRight,  } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = (props) => {
    const { heading, img, text, breadCrumb } = props?.data
    return (
        <div>
            <div className='bannerImg position-relative'>
                <img src={require(`../../utilities/bannerImages/${img}`)} alt="" srcSet="" />
                <div className='bgOverlay position-absolute top-0 start-0 h-100 w-100 
                d-flex align-items-center'>
                    <div className='container'>
                        <div className='bannerText text-center'>
                            {
                                breadCrumb && <ul className='d-flex justify-content-center 
                                 align-items-center pb-4'>
                                    {
                                        breadCrumb?.map((item, i) => <li><Link key={i}
                                            className='text-light' to={item.link}>
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
            </div>
        </div>
    );
};

export default Banner;