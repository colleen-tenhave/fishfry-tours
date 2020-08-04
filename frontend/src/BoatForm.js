import React, { Component } from 'react';

class BoatForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit() {
      console.log("submitted");
  }

  render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Boat Name:
            <input type="text"  />
          </label>
          <input type="submit" value="Submit" className="BoatForm-submit" />
      </form>
      );
  }
}
export default BoatForm;
