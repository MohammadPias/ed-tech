import React from 'react';
import BootCamp from '../BootCamp/BootCamp';
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
            <BootCamp />
            <Footers />
        </div>
    );
};

export default Home;