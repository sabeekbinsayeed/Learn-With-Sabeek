import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = (props) => {
    const { id, name, price, img, description } = props.course;
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div>
            <img className='w-75 h-50' src={img}></img>
            <h1>{name}</h1>

            <h3>price : {price}</h3>
            <p className='w-50'>{description}</p>
            <button style={{ color: 'orange' }} onClick={handleCheckout}>Checkout</button>

        </div>
    );
};

export default Course;