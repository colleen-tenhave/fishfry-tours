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
  

  getFetchUrl(){
    //use local url if running in development
    if(process.env.NODE_ENV == 'development'){
      return "http://localhost:8080/boats";
    }else{
      return "http://fishfry-backend.us-east-2.elasticbeanstalk.com/boats"
    }
  }
  
  fetchData() {
    const fetchUrl = this.getFetchUrl();
    fetch(fetchUrl)
    .then(res => res.text())
    .then((res) => {
      var resObject = JSON.parse(res);
      this.setState({data: JSON.parse(resObject)});
    })
  }

  componentWillMount() {
    //fetching boat data
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fishfry Tours Fleet Tracker</h1>
          <p className="App-subtitle">
              View or update the fleet below
          </p>
        </header>
          <BoatBoard data={this.state.data} getFetchUrl={this.getFetchUrl}/>
      </div>
    );
  }
}

export default App;
