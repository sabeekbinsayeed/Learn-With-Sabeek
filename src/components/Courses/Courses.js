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
            <h1 className='text-center mb-4'>Total courses {courses.length}</h1>
            <div className='courses ms-5'>

                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;