import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wger from '../../util/wger';

import { Container, Row, Col } from 'react-bootstrap';
import { CardDeckExercises } from '../cardDeck/CardDeck';
import { SelectCategory } from '../selection/SelectCategory';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
    }
    this.searchWger = this.searchWger.bind(this);
  }

  searchWger(category) {
    Wger.search(category).then(exercises => {
      this.setState({exercises: exercises})
    });   
  }

  render() {
    return (
      <Container>
        <Row className='hero-banner mt-4'>
          <p className='display-1 mx-auto text-white'>Get Your Exercise!</p>
        </Row>
        <Row>
          <Col>
          <SelectCategory searchWger={this.searchWger}/>
          </Col>
        </Row >
        <Row className="mt-4">
          <Col>
          <CardDeckExercises exercises={this.state.exercises}/>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default App;
