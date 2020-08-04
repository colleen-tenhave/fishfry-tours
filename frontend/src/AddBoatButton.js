import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import BoatForm from './BoatForm';

class AddBoatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Collapsible trigger="+ Add Boat">
           <BoatForm />
        </Collapsible>
      );
  }
}
export default AddBoatButton;
