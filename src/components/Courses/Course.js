import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Course = ({ course }) => {
    const { title, sub, url, detail, price, rating, level, duration } = course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>{sub}</Card.Subtitle>
                        <Card.Subtitle className='text-uppercase my-1 text-secondary'>{level}</Card.Subtitle>
                        <Card.Subtitle>
                            Price: {price}$
                        </Card.Subtitle>
                        <Card.Text>
                            Rating: {rating}
                        </Card.Text>

                        <Button variant='secondary'>Detail</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;