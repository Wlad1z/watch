import React from 'react';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock timeZone='Europe/Moscow' />
    </div>
  );
}

export default App;
