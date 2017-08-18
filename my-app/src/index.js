import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from "react-redux";
import routes from "./routes/index.js"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './containers/about.js'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>, 
    document.getElementById('root'));
