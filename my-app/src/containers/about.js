import React, { Component } from 'react';
import './about.less';
import classNames from 'classnames';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0
        }
    }

    tabChange(activeIndex){
        this.setState({
            activeIndex
        })
    }

    getTabs(){
        const items = ['tab1', 'tab2', 'tab3'];

        return items.map((item,index)=>{
            const {
              activeIndex
            } = this.state;
            return (
                <div ref={`tab${index}`} key={index} className={classNames('tab',{'active':activeIndex === index})}  onClick={this.tabChange.bind(this,index)}>
                  {item}
                </div>
            );
        });
    }

    render() {
        const {
          activeIndex
        } = this.state;

        return (
            <div>
                <div className="main">
                    {this.getTabs()}
                </div>

                {
                   activeIndex===0 ? <div>1111</div> : <div>22</div>
                }
            </div>
        );
    }
}



export default About;
