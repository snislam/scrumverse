import React from 'react';
import Courses from '../Components/Courses';
import Features from '../Components/Features';
import Header from '../Components/Header';
import Tesimonial from '../Components/Tesimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <Features />
            <Tesimonial />
        </div>
    );
};

export default Home;