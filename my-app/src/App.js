import React, { Component } from 'react';
// import About from './containers/about.js'
import {
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/about">tab组件</Link></li>
        <li><Link to="/reactDemo">2reactDemo</Link></li>
        <li><Link to="/pullRefresh">下拉刷新</Link></li>
      </ul>
    );
  }
}



export default App;
