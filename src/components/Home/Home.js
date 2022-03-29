import React from 'react';
import About from '../About/About';
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
            <About />
            <BootCamp />
            <Footers />
        </div>
    );
};

export default Home;