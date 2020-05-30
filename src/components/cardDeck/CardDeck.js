import React from 'react';

import { CardColumns } from 'react-bootstrap';

import { CardExercise } from '../card/Card';



export class CardDeckExercises extends React.Component {
    render() {
        return (
            <CardColumns className="text-center">
                {
                    this.props.exercises.map(exercise => {
                        return <CardExercise exercise= {exercise} categories={this.props.categories} key={exercise.id}/>
                    })
                }
            </CardColumns>
        )
    }
}