import ReactStars from "react-rating-stars-component";
import React from 'react';

const Course = ({ course }) => {
    const { course_name, author, ratings, img } = course;
    return (
        <div className='shadow-lg rounded-lg'>
            <img className='h-48 w-full rounded-lg' src={img} alt={course_name} />
            <div className='p-5'>
                <h2 className='text-md font-bold'>{course_name}</h2>
                <p className='text-slate-600 font-medium my-2'>{author}</p>
                <p><ReactStars
                    count={ratings}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    color="red"
                    activeColor="#0000FF"
                /> </p>
                <button className='border-2 border-blue-400 py-1 px-5 rounded-full hover:bg-blue-400 hover:text-slate-50 duration-700'>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;