import Board, { createTranslate } from 'react-trello';
import React, { Component } from 'react';

class BoatBoard extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  handleDataChange(newData) {
    fetch(
      "http://localhost:8080/boats", {
        method: 'put',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newData)
      }
    )  
  }

  render() {
    const TEXTS = {
      "Click to add card": "+ Click to add new boat",
      "button": {
        "Add card": "Submit",
        "Cancel": "Cancel"
      },
      "placeholder": {
        "title": "Boat Name",
        "description": "Boat Description"
      }
    }
  
    return (
      <div className="BoatBoard">
        <Board t={createTranslate(TEXTS)}  data={this.props.data} onDataChange={this.handleDataChange} editable={true} style={{backgroundColor: 'white'}} />
      </div>
    );
  }
}
export default BoatBoard;
