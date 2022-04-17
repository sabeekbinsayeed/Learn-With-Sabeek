import React from 'react';

const Course = (props) => {
    const { id, name, price, img } = props.course;
    return (
        <div>
            <img className='w-75 h-50' src={img}></img>
            <h1>{name}</h1>

            <p>price : {price}</p>

        </div>
    );
};

export default Course;