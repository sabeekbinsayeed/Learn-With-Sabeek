import React from 'react';
import image from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div style={{ paddingLeft: '70px', paddingTop: '30px', marginBottom: '120px' }} className=' row  '>

            <div className='col-lg-6 col-12 '>

                <div className='' >
                    <h1 className=''>Learn With <span style={{ color: 'orange' }}>Sabeek</span></h1>

                    <p style={{ fontSize: '20px' }} className='w-50 '>
                        learn programming related topics with me. You can also subscribe to my youtube channel.
                    </p>


                    <button style={{ backgroundColor: 'orange', color: 'white', border: '0px' }} className='px-3 py-2 mt-3 '>About me</button>
                </div>

            </div>
            <div className='col-lg-6 col-12'>

                <img className='w-50 mt-3' src={image} alt="" />

            </div>

        </div >
    );
};

export default Banner;