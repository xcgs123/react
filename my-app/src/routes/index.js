import React, { PropTypes } from 'react';
// import {Router, Route, browerHistory} from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from '../App.js';
import About from '../containers/about.js'
import Todo from '../containers/todoList.js'
import MobxDemo from '../containers/mobxDemo'
import MusicDemo from '../containers/MusicDemo'

// export default (
//   <div>
//       <Route path="/home" component={App} />
//       <Route path="/about" component={About} />
//   </div>
// );


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/home" component={App} />
                <Route path="/about" component={About} />
                <Route path="/todo" component={Todo} />
                <Route path="/mobxDemo" component={MobxDemo} />
                <Route path="/musicDemo" component={MusicDemo} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;