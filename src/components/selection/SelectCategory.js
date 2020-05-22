import React from 'react';

import { Dropdown } from 'react-bootstrap';


export class SelectCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 0,
      arms: 8,
      legs: 9,
      core: 10,
      chest: 11,
      back: 12,
      shoulder: 13,
      calves: 14,
    }
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(event) {
    this.setState({category: event.target.id})
    setTimeout(() => {
      this.props.searchWger(this.state.category)
      console.log(this.state.category)
    }
      , 0)
    
  }

  render() {
    return (
      <Dropdown className="text-center mt-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Muscle
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.chest}>Chest</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.back}>Back</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.arms}>Arms</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.legs}>Legs</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.shoulders}>Shoulders</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.core}>Core</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCategory} id={this.state.calves}>Calves</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}