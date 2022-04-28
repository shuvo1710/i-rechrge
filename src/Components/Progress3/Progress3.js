import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai";

const Progress3 = () => {
    return (
        <div>
            <Container>
                <div className="allprogress">
                    <div className="singleProgress">
                        <Link to="/home"><AiFillCheckCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><AiFillCheckCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><AiFillCheckCircle className='text-success'/></Link>
                    </div>
                    <div className="singleProgress">
                        <Link to="/home"><AiFillCheckCircle className='text-success'/></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Progress3;