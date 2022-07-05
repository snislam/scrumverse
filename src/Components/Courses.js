import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <section className='my-20 px-5 md:px-20'>
            <p className='text-lg font-bold'>A broad range of courses</p>
            <h3 className='text-slate-600'>Choose from 100+ online video courses with new additions published every month</h3>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-10'>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </section>
    );
};

export default Courses;