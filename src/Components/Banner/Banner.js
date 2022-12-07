import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <div className='bannerImg position-relative'>
                <img src={require('../../utilities/bannerImages/banner.png')} alt="" srcSet="" />
                <div className='bgOverlay position-absolute top-0 start-0 h-100 w-100 d-flex align-items-center'>
                <div className='container '>
                    <div className='bannerText'>
                    <h1>Online Mobile Recharge</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus incidunt nulla magni iste? Doloremque repellendus, excepturi rerum sed qui quod adipisci, expedita ipsam possimus dolores et impedit totam necessitatibus nam quos culpa. Laborum dolore unde nesciunt consequuntur dignissimos, quod nihil, aperiam ad molestiae quaerat id, tenetur explicabo modi deleniti!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;