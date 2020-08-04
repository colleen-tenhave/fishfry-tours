import React from 'react';
import BoatBoard from './BoatBoard';
import AddBoatButton from './AddBoatButton';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fishfry</h1>
      </header>
        <AddBoatButton />
        <BoatBoard />
    </div>
  );
}

export default App;
