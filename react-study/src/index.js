/*
* @Author: Administrator
* @Date:   2017-02-03 23:30:16
* @Last Modified by:   zuoyan
* @Last Modified time: 2017-06-28 21:28:02
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import routes from './routes'

import ToDoApp from './components/ToDoApp';
import Home from './containers/home.js'

document.querySelector('html').style['fontSize'] = 100 * document.documentElement.clientWidth/750+'px';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


class App extends React.Component{
    render() {
        return (
            <div style={{fontSize:'.3rem'}}>
                <Link to="/home">home</Link>
            </div>
        );
    }
}


ReactDOM.render(
    <Router history={history}>
        <div>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/toDoApp" component={ToDoApp} />
        </div>
    </Router>,
    document.getElementById('root')
);


