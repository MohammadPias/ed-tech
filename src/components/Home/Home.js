import React from 'react';
import Courses from '../Courses/Courses';
import Banner from '../Header/Banner';
import NavBar from '../Header/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Courses />
        </div>
    );
};

export default Home;