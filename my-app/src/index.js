import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import Root from "./routes/index.js"
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import About from './containers/about.js';
import ReactDemo from './containers/ReactDemo.js';
import PullRefresh from './containers/PullRefresh/index.js';
import { createStore } from 'redux';
import todoApp from './reducers/reducers.js'

let store = createStore(todoApp);

ReactDOM.render(
    <Root store={store}/>, 
    document.getElementById('root'));


