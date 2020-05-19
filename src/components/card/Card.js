import React from 'react';

import { Card } from 'react-bootstrap';

const exercise = {
    srcImg: 'https://images.unsplash.com/photo-1566351557863-467d204a9f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    name: 'Push Ups',
    muscle: 'Upper Chest',
    category: 'Chest',
    description: 'Try to maintain a straight back all the way through the exercise, and now kill it!'
}

export class CardExercise extends React.Component {
    render() {
        return(
            <Card border="secondary">
                    <Card.Header>{exercise.category}</Card.Header>
                    <Card.Img variant="bottom" src={exercise.srcImg} />
                    <Card.Body>
                        <Card.Title>{exercise.name}</Card.Title>
                        <Card.Text>{exercise.description}</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}