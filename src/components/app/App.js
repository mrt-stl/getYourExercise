import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { CardDeckExercises } from '../cardDeck/CardDeck';
import { SelectCategory } from '../selection/SelectCategory';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row className='hero-banner mt-4'>
          <p className='display-1 mx-auto text-white'>Get Your Exercise!</p>
        </Row>
        <Row>
          <Col>
          <SelectCategory />
          </Col>
        </Row >
        <Row className="mt-4">
          <Col>
          <CardDeckExercises />
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default App;
