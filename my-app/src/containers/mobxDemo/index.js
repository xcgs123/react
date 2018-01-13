/*
* @Author: zuoyan
* @Date:   2018-01-13 09:46:13
* @Last Modified by:   zuoyan
* @Last Modified time: 2018-01-13 09:52:50
*/
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import MobxDemoStore from './store';

@observer
export default class MobxDemo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('render');
        return(
            <div>
                <ul>
                    {MobxDemoStore.finishedTodos.map((todo,index) =>
                        <li key={index}>{todo.title}</li>)}
                </ul>
                <div>
                    <input type="button" onClick={() => {
                        MobxDemoStore.changeTodoTitle({index:0,title:"修改后的todo标题"});
                    }} value="点我"/>
                </div>
            </div>
        )
    }
}