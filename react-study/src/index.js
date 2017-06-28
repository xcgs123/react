/*
* @Author: Administrator
* @Date:   2017-02-03 23:30:16
* @Last Modified by:   zuoyan
* @Last Modified time: 2017-06-28 21:28:02
*/
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';

document.querySelector('html').style['fontSize'] = 100 * document.documentElement.clientWidth/750+'px';

class App extends React.Component {
   render(){ // Every react component has a render method.
     return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
       <ToDoApp />
     );
   }
 }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


