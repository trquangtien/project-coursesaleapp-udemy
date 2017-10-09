import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './components/coursesales.component.jsx'

class App extends Component {

  render() {

    var arrayCourse = [
      { name: 'React JS', price: 10 },
      { name: 'Angular JS', price: 50 },
      { name: 'React Native', price: 20 },
      { name: 'MEAN Stack', price: 100 }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Course Sale App</h1>
        </header>
        <CourseSales items={arrayCourse} />
      </div>
    );
  }
}

export default App;
