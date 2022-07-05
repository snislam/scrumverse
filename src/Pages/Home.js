import React from 'react';
import Courses from '../Components/Courses';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Newsletter from '../Components/Newsletter';
import Tesimonial from '../Components/Tesimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <Features />
            <Tesimonial />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;