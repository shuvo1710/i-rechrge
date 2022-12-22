import React from 'react';
import { Container } from 'react-bootstrap';
import { FcHome } from 'react-icons/fc';
import { MdKeyboardArrowRight, } from 'react-icons/md';
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
                <Container className='px-0'>
                    <div className='bannerText text-center'>

                        {
                            breadCrumb &&
                            <ul className='d-flex justify-content-center 
                                align-items-center '>
                                <FcHome className='homeIcon fs-5' />
                                {
                                    breadCrumb?.map((item, i) => <li className='d-flex justify-content-center align-items-center' key={i}>  <Link
                                        className='text-light fs-5' to={item?.link}>
                                        {item.title}</Link>{i === (breadCrumb.length -
                                            1)
                                            ?
                                            ''
                                            :
                                            <MdKeyboardArrowRight className='fs-2' />}</li>)
                                }
                            </ul>

                        }
                        <h1 className='bannerHeading'>{heading}</h1>
                        {
                            text && <p>{text}</p>
                        }

                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Banner;