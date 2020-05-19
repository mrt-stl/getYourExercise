import React from 'react';

import { CardColumns } from 'react-bootstrap';

import { CardExercise } from '../card/Card';



export class CardDeckExercises extends React.Component {
    render() {
        return (
            <CardColumns className="text-center">
                <CardExercise />
                <CardExercise />
                <CardExercise />
                <CardExercise />
            </CardColumns>
        )
    }
}