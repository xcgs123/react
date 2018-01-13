import About from './containers/about.js';
import {
  Link
} from 'react-router-dom';
import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/about">tab组件</Link></li>
        <li><Link to="/reactDemo">2reactDemo</Link></li>
        <li><Link to="/mobxDemo">mobx demo</Link></li>
        <li><Link to="/musicDemo">音乐播放器 demo</Link></li>
      </ul>
    );
  }
}
