import React, { Component } from 'react';
import logo from './logo.svg';
// import About from './containers/about.js'
import {
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reactDemo">reactDemo</Link></li>
      </ul>
    );
  }
}



export default App;
