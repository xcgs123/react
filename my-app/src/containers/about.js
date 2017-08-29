import React, { Component } from 'react';
import './about.css'

class About extends Component {
  render() {
    return (
      <div className="app">
        <input type="checkbox" id="awesome" autofocus />
        <label for="awesome">Awesome!</label>
        <br />
        <input type="checkbox" id="awesome2" checked />
        <label for="awesome2">Awesome!</label>
      </div>
    );
  }
}



export default About;
