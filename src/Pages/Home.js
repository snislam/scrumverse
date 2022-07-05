import React from 'react';
import Courses from '../Components/Courses';
import Features from '../Components/Features';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <Features />
        </div>
    );
};

export default Home;