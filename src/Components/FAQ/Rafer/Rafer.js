import React from 'react';
import "./Rafer.css"

const Rafer = () => {
    return (
        <section className='container py-5'>
            <div className='referHead'>
                <h2>Refer And Earn</h2>
                <p>Refer your friends and earn up to $20</p>
                <div className='d-flex gap-4'>
                    <div className='singleRefer'>
                        <h1>1</h1>
                        <h4>You Refer friends</h4>
                        <p>share your referral link with friends.They get $10</p>
                    </div>

                    <div className='singleRefer'>
                        <h1>2</h1>
                        <h4>You Refer friends</h4>
                        <p>share your referral link with friends.They get $10</p>
                    </div>

                    <div className='singleRefer'>
                        <h1>3</h1>
                        <h4>You Refer friends</h4>
                        <p>share your referral link with friends.They get $10</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rafer;