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
      categories: [],
      equipment: [],
      hasCategories: false,
      hasEquipment: false,
    }
    this.searchWger = this.searchWger.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getEquipment = this.getEquipment.bind(this);
  }

  searchWger(category, equipment) {
    Wger.search(category, equipment).then(exercises => {
      this.setState({exercises: exercises})
    });   
  }

  getCategories() {
    Wger.Categories().then(categories => {
      this.setState({
        categories: categories,
        hasCategories: true
      })
    })
  }

  getEquipment() {
    Wger.Equipment().then(equipments => {
      this.setState({
        equipment: equipments,
        hasEquipment: true
      })
    })
  }

  render() {
    if(!this.state.hasCategories) {this.getCategories()}
    if(!this.state.hasEquipment) {this.getEquipment()}
    let selection;
    if(this.state.categories) {
      selection = <div>
        <SelectCategory searchWger={this.searchWger} categories={this.state.categories} equipment={this.state.equipment}/>
        </div>;
    }

    return (
      <Container>
        <Row className='hero-banner mt-4'>
          <p className='display-1 mx-auto text-white'>Get Your Exercise!</p>
        </Row>
          {selection}
        <Row className="mt-4">
          <Col>
          <CardDeckExercises exercises={this.state.exercises} category={this.state.categories}/>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default App;
