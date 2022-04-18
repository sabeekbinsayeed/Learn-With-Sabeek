import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className=' row  ' id='bannerId'>

            {/* <div style={{ paddingLeft: '70px', paddingTop: '30px', marginBottom: '120px' }} className=' row  '> */}


            <div className='col-lg-6 col-12  ' >

                <div id='design' >
                    <h1 className=''>Learn With <span style={{ color: 'orange' }}>Sabeek</span></h1>

                    <p style={{ fontSize: '20px' }} className='w-50 '>
                        learn programming related topics with me. You can also subscribe to my youtube channel.
                    </p>


                    <button onClick={() => navigate('/about')} style={{ backgroundColor: 'orange', color: 'white', border: '0px' }} className='px-3 py-2 mt-3 '>About me</button>
                </div>

            </div>
            <div className='col-lg-6 col-12' id='imageBanner'>

                <img className='w-50 mt-3' src={image} alt="" />

            </div>

        </div >
    );
};

export default Banner;