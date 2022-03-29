import React from 'react';
import bootcamp from '../../images/bootcamp.jpg'

const BootCamp = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center fw-bold text-secondary'>Join our Bootcamp</h2>
            <img style={{ width: '100%', height: 'auto' }} src={bootcamp} alt="" />
        </div>
    );
};

export default BootCamp;