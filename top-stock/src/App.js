import React, { Component } from 'react';
import top from './top.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={top} className="App-logo" alt="top" />
          <h1 className="App-title">Welcome to TopStock</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
