import React from 'react';

import { Dropdown } from 'react-bootstrap';


export class SelectCategory extends React.Component {
    render() {
        return(

<Dropdown className="text-center mt-4">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Muscle
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Chest</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Back</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Arms</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Legs</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Shoulders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        )
    }
}