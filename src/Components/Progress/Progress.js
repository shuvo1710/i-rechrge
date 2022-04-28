import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import './Progress.css'
const Progress = () => {
    return (
        <div>
            <Container>
                <div className="allprogress">
                    <div className="singleProgress">
                        <Link to="/home"><AiFillCheckCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><FaRegDotCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><FaRegDotCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><FaRegDotCircle className='text-success'/></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Progress;