import React from 'react';
import { FaRocket } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const singleChoose = ({ singleChoose }) => {
    console.log(singleChoose)
    const { icon, qsn, ans } = singleChoose;
    console.log((icon))
    return (
        <div>
            <Fade right>
                <div className='ChooseItem'>
                    <div>
                        <span className='roundedIcon'><FaRocket/></span>
                    </div>
                    <div className='chooseTextHead'>
                        <div className='chooseText'>
                            <h5 >{qsn.us}</h5>
                            <p>{ans.us}</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default singleChoose;