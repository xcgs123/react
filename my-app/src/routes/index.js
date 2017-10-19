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
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;