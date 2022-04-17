import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, course, review, rating } = props.review;
    return (
        <div >
            <div className="card mx-3 p-3" >

                <div className="card-body ">
                    <h3 className="card-title">{name}</h3>
                    <h6 className="card-title">{course}</h6>
                    <p className="card-text w-75">{review}</p>
                    <p className="card-text">rating : {rating}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>


        </div>
    );
};

export default Review;