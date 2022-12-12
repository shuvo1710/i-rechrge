import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = (props) => {
    const { heading, img, text,breadCumb } = props?.data
    return (
        <div>
            <div className='bannerImg position-relative'>
                <img src={require(`../../utilities/bannerImages/${img}`)} alt="" srcSet="" />
                <div className='bgOverlay position-absolute top-0 start-0 h-100 w-100 d-flex align-items-center'>
                    <div className='container '>
                        <div className='bannerText'>
                        {
                            breadCumb && <ul className='d-flex'>
                                {
                                    breadCumb?.map((item,i)=><li><Link className='text-light' to={item.link}>{item.title}</Link>{i === (breadCumb.length - 1) ? '' : <MdDoubleArrow/>}</li>)
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