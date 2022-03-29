import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import courses from '../../courses.json';

const CourseDetails = () => {
    const { courseId } = useParams();
    const singleCourse = courses.find(course => course.id === parseInt(courseId))
    console.log(singleCourse)
    return (
        <div className='w-50 mx-auto mt-5'>
            <Card>
                <Card.Img style={{ width: '' }} variant="top" src={singleCourse.url} />
                <Card.Body>
                    <Card.Title>{singleCourse.title}</Card.Title>
                    <Card.Subtitle>{singleCourse.sub}</Card.Subtitle>
                    <Card.Text>
                        {singleCourse.detail}
                    </Card.Text>
                    <Card.Subtitle className='text-uppercase my-1 text-secondary'>{singleCourse.level}</Card.Subtitle>
                    <Card.Subtitle className='text-uppercase my-1'>
                        Price: {singleCourse.price}$
                    </Card.Subtitle>
                    <Card.Subtitle className='text-uppercase my-1'>
                        Rating: {singleCourse.rating}
                    </Card.Subtitle>
                    <Card.Subtitle className='text-uppercase my-1'>
                        Duration: {singleCourse.duration}
                    </Card.Subtitle >
                    <Link to='/'><Button variant='secondary'>Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;