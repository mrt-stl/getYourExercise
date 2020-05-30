import React from 'react';

import { Card } from 'react-bootstrap';

export class CardExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryToString: {
                8: 'Arms',
                9: 'Legs',
                10: 'Abs',
                11: 'Chest',
                12: 'Back',
                13: 'Shoulders',
                14: 'Calves',
            }
        }
    }
    render() {
        return(
            <Card border="secondary">
                    <Card.Header>{this.state.categoryToString[this.props.exercise.category]}</Card.Header>
                    <Card.Img variant="bottom" src={this.props.exercise.srcImg} />
                    <Card.Body>
                        <Card.Title>{this.props.exercise.name}</Card.Title>
                        <Card.Text>{<span dangerouslySetInnerHTML={{ __html: this.props.exercise.description }} />}</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}