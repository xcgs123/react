import React, { Component } from 'react';
// import About from './containers/about.js'
import {
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/about">11About</Link></li>
        <li><Link to="/reactDemo">2reactDemo</Link></li>
      </ul>
    );
  }
}



export default App;
