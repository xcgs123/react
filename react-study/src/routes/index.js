import React from 'react';
import Route from 'react-route';

import Home  from '../containers/home.js'

export default  (
    <div>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
    </div>
)