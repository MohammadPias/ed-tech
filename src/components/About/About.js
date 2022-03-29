import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className='mt-5' id="about">
            <h2 className='text-center fw-bold text-secondary'>About us</h2>
            <Container>
                <Row>
                    <Col sm='12' lg="6">
                        <img style={{ width: '100%', height: 'auto' }} src={about} alt="" />
                    </Col>
                    <Col sm='12' lg="6">
                        <p>Ed-Tech isn’t completely free but it offers more than 1,400 free courses on its site, and in response to the COVID-19 pandemic, Ed-Tech will add an additional 100 free courses to that list. Topics and tools covered in Ed-Tech courses include Python, machine learning, data science, cloud computing, artificial intelligence, programming, web development and many more. While not everything on Ed-Tech is free, some programs offer a free seven-day trial, including the Google IT Support Professional Certificate course and AWS Fundamentals: Going Cloud Native. After that, accounts start at $49 per month to access programs that aren’t offered in the free subscription level.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;