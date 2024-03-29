import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footers = () => {
    return (
        <div className="footer-container footer-bg text-white mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="logo col">
                    <h1>Ed-Tech</h1>
                    <p className="text-light text-justify w-75">Colleges nowadays offer a variety of options for students. This also means that whatever subject or field a student want to choose, they can find the courses or programs because online courses can easily offer it to the students.</p>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">About Services</Link>
                    <Link to="/">Read our blog</Link>
                    <Link to="/">Signup to purchasing</Link>
                    <Link to="/">Privacy and Policy</Link>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">Get help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">Payment Method</Link>

                    <div>
                        <Link to="/"><i className="fab fa-linkedin font-style"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square font-style"></i></Link>
                        <Link to="/"><i className="fab fa-facebook-square font-style"></i></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 border-top footer-bg">
                <p className="mt-2 text-center"><small>copyright &copy; 2022 Ed-Tech</small></p>
            </div>

        </div>
    );
};

export default Footers;