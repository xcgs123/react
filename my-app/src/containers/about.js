import React, { Component } from 'react';
import './about.less';
import classNames from 'classnames';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: false
        }
    }

    tabChange(){
        this.setState({
            activeIndex: !this.state.activeIndex
        })
    }

    render() {
        return (
          <div className="main">
            <div className={classNames('tab',{'active':this.state.activeIndex})} onClick={this.tabChange.bind(this)}>tab1</div>
            <div className="tab">tab2</div>
            <div className="tab">tab3</div>
          </div>
        );
    }
}



export default About;
