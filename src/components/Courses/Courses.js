import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 style={{ color: 'orangered' }} className='text-center mb-4'>Services</h1>
            <h4 className='text-center mb-5'>total courses {courses.length}</h4>
            <div className='courses ms-5'>

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;