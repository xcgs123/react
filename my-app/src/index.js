import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from "react-redux";
// import routes from "./routes/index.js"
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import About from './containers/about.js'
import ReactDemo from './containers/ReactDemo.js'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
            <Route path="/reactDemo" component={ReactDemo} />
        </div>
    </Router>, 
    document.getElementById('root'));
