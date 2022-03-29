import React from 'react';
import { Row } from 'react-bootstrap';
import Course from './Course';
import courses from '../../courses.json'

const Courses = () => {
    return (
        <div style={{ marginTop: '200px' }} className='w-75 mx-auto'>
            <h2 className='text-center text-bold mb-4'>Our best courses</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    courses.map(course =>
                        <Course key={course.id} course={course} />
                    )
                }
            </Row>
        </div>
    );
};

export default Courses;





/* const courses = [
    {
        title: 'Intro to Computer Science',
        sub: 'Building a search engine',
        detail: 'Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to practical disciplines (including the design and implementation of hardware and software).',
        url: 'https://i.ibb.co/GsLKvTN/intro-to-computer-science.jpg',
        level: 'Beginner',
        price: 150,
        id: 1,
        rating: 4.8,
        duration: '3 month'
    },
    {
        title: 'Intro to Statistics',
        sub: 'Making decision based on data',
        detail: 'Statics is the branch of mechanics concerned with the study of forces and the effect of forces on a non-deformable, or rigid, system when the system is in a state of equilibrium. This course is a crucial prerequisite for later areas, such as Dynamics and Properties of Materials.',
        url: 'https://i.ibb.co/mcDKjph/intro-to-statistics.jpg',
        level: 'Beginner',
        price: 140,
        id: 2,
        rating: 4.7,
        duration: '3 month'
    },
    {
        title: 'Software Testing',
        sub: 'How to make software fail',
        detail: 'Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. The purpose of software testing is to identify errors, gaps or missing requirements in contrast to actual requirements.',
        url: 'https://i.ibb.co/3zbZVr6/software-testing.jpg',
        level: 'Advanced',
        price: 180,
        id: 3,
        rating: 4.8,
        duration: '3 month'
    },
    {
        title: 'Artificial Intelligence',
        sub: 'Programming a robotic car',
        detail: 'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.',
        url: 'https://i.ibb.co/TW6L6Rv/Artificial-intelligence.jpg',
        level: 'Advanced',
        price: 200,
        id: 4,
        rating: 5,
        duration: '6 month'
    },
    {
        title: 'Design of a computer programs',
        sub: 'Programming principles',
        detail: 'Program design consists of the steps a programmer should do before they start coding the program in a specific language. These steps when properly documented will make the completed program easier for other programmers to maintain in the future.',
        url: 'https://i.ibb.co/LC3kk8s/design-of-computer-program.jpg',
        level: 'Advanced',
        price: 160,
        id: 5,
        rating: 4.5,
        duration: '3 month'
    },
    {
        title: 'Applied Cryptography',
        sub: 'Science of secrets',
        detail: 'Introduction to applied cryptography. Cryptography is widely used in modern technology, particularly in software. The primary purpose of cryptography is to provide confidentiality of data, but it is also used for authentication, and to verify data integrity.',
        url: 'https://i.ibb.co/MZScmR3/applied-criptography.jpg',
        level: 'Advanced',
        price: 250,
        id: 6,
        rating: 5,
        duration: '6 month'
    },
]
const stringify = JSON.stringify(courses)
console.log(stringify) */
