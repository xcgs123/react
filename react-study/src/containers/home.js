import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import ToDoApp from '../components/TodoApp.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
          <div>
             <Link to="/ToDoApp">ToDoApp</Link>
          </div>
        )
    }
}