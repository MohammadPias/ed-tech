import React from 'react';
import Courses from '../Courses/Courses';
import Footers from '../Footer/Footer';
import Banner from '../Header/Banner';
import NavBar from '../Header/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Courses />
            <Footers />
        </div>
    );
};

export default Home;