import React from 'react';
import BoatBoard from './BoatBoard';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fishfry</h1>
        <p>View Our Boats Below</p>
      </header>
        <BoatBoard />
    </div>
  );
}

export default App;
