import React from 'react';

import { Dropdown, Row, Col, Button } from 'react-bootstrap';


export class SelectCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCategory: '',
      currentEquipment: '',
      currentCategoryString: 'Muscles',
      currentEquipmentString: 'Equipment'
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleEquipment = this.handleEquipment.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleCategory(event) {
    this.setState({
      currentCategory: event.target.id,
      currentCategoryString: event.target.getAttribute("categorystring")
    }, () => {
      this.props.searchWger(this.state.currentCategory, this.state.currentEquipment);
    }
    )
  }

  handleEquipment(event) {
    this.setState({
      currentEquipment: event.target.id,
      currentEquipmentString: event.target.getAttribute("equipmentstring")
    }, () => {
      this.props.searchWger(this.state.currentCategory, this.state.currentEquipment);
    }
    )
  }

  handleReset() {
    this.setState({
      currentCategory: '',
      currentEquipment: '',
      currentCategoryString: 'Muscles',
      currentEquipmentString: 'Equipment'
    }, () => {
      this.props.searchWger(this.state.currentCategory, this.state.currentEquipment);
    }
    )
  }


  render() {
    return (
      <div>

        <Row>
          <Col>
            <Dropdown className="text-center mt-4">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.currentCategoryString}
        </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  this.props.categories.map(category => {
                    return <Dropdown.Item onClick={this.handleCategory} key={category.id} categorystring={category.name} id={category.id}>{category.name}</Dropdown.Item>
                  }
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown className="text-center mt-4">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.currentEquipmentString}
      </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  this.props.equipment.map(equipments => {
                    return <Dropdown.Item onClick={this.handleEquipment} key={equipments.id} equipmentstring={equipments.name} id={equipments.id}>{equipments.name}</Dropdown.Item>
                  }
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <h5>
              <Button variant="secondary" className="mt-4" onClick={this.handleReset}>Reset</Button>
            </h5>
          </Col>

        </Row>
      </div>
    )
  }
}