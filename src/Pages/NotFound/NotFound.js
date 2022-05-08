import React from 'react';
import './NotFound.css'
import err from '../../utilities/2677143-removebg-preview.png'
import { useHistory } from 'react-router-dom';
const NotFound = () => {
    const history = useHistory()
    return (
        <div className='error'>
            <div className="errorContainer">
                <img src={err} alt="" className="w-100 h-100" />
                
                <div className='text-center'>
                    <h1>Lost Somewhere?</h1>
                    <button onClick={()=>history.push('/home')} className='backButton'>Back To Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;