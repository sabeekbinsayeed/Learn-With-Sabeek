import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{ backgroundColor: 'orange', marginTop: '30px' }}>

            <h3 className='text-center pt-4'>  	&copy; right reserved</h3>
            <div className='d-flex justify-content-center'>
                <div>
                    <h5>contact us:</h5>
                    <p>gmail: sabikbinsayeed@gmail.com</p>
                </div>



            </div>
        </div>
    );
};

export default Footer;