import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './components/coursesales.component.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Course Sale App</h1>
        </header>
        <CourseSales/>
      </div>
    );
  }
}

export default App;
