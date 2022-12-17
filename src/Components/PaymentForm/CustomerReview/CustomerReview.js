import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { HiArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import "./CustomerReview.css"

const CustomerReview = () => {
    return (
        <section className='py-5 bgReview'>
            <Container>
            <div className='reviewHead text-center'>
                <h2>What people are saying about us</h2>
                <p>Send a top-up experience people love to talk about</p>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12 py-4 gap-3'>
                    <div className='text-center singleReview p-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Mehedi Hassan</h5>
                    </div>
                    <div className='text-center singleReview p-3 mt-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Nafiz Hassan</h5>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 py-4 gap-3'>
                    <div className='text-center singleReview p-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Rahad Hassan</h5>
                    </div>

                    <div className='text-center singleReview p-3 mt-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Hassan Ali</h5>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 py-4 gap-3'>
                    <div className='text-center singleReview p-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Nahid Shuvo</h5>
                    </div>
                    <div className='text-center singleReview p-3 mt-3'>
                        <p>
                           "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tenetur quo
                            cupiditate recusandae beatae temporibus sint at voluptatem? Ad est voluptatibus
                            eius maiores sunt, temporibus facilis sequi dolores necessitatibus ratione"
                        </p>
                        <span className='text-warning'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </span>
                        <h5>Mehedi Hassan</h5>
                    </div>
                </div>

            </div>
            <div className='text-center '>
                <Link className='moreReview'>See More People Review <span><HiArrowSmRight/></span></Link>
            </div>
            </Container>
        </section>
    );
};

export default CustomerReview;