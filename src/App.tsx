import React from 'react';
import logo from './logo.svg';
import Fgcinput from './Input/Input';
import Fgcoutput from './Output/Output';
import './App.css';

function App() {
  let PageTitle:string = "Fighting Game Keyboard";
  let PageSubtitle:string = "Clean up your Combo Inputs (Visually)"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {PageTitle} <br />
        </p>
        <p className="font-sans text-lg text-bold text-blue-400 text-center border-2 border-indigo-400 px-64">
          {PageSubtitle}
        </p>
        <Fgcinput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Fgcoutput />
      </header>
    </div>
  );
}

export default App;
