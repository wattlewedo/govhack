import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
        <h1>WattleWatch</h1>
      <Map/>
    </div>
  );
};

export default App;
