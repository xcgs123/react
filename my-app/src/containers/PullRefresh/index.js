import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';
import Loading from '../../component/Loading/Loading.js';
import PullToRefresh from '../../component/PullRefresh/index.js';
import Loaders from '../../component/Loaders/index.js';


class PullRefresh extends Component{
  constructor(props){
      super(props);
      this.state = {
          loading: false
      }
  }

  doRefresh(){
    this.setState({
        loading: true
    })
  }

  render(){
    return(
        <PullToRefresh>
          <div>下拉刷新11</div>
        </PullToRefresh>
    )
  }
}

export default PullRefresh;
