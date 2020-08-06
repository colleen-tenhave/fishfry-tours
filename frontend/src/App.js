import React, { Component } from 'react';
import BoatBoard from './BoatBoard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        lanes: []
      }
    };
   }
  
  fetchData() {
    fetch("http://localhost:8080/boats")
    .then(res => res.text())
    .then((res) => {
      var resObject = JSON.parse(res);
      this.setState({data: JSON.parse(resObject)});
    })
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Fishfry</h1>
        </header>
          <BoatBoard data={this.state.data}/>
      </div>
    );
  }
}

export default App;
