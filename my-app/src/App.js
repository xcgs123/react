import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './containers/about.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello,Welcome to React</h2>
        </div>
      

        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}



export default App;
