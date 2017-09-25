import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';
import Loading from '../../component/Loading/Loading.js'


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
      <div className="refresh">
        <div onClick={this.doRefresh.bind(this)}>点击刷新</div>

        {this.state.loading && <Loading />}

        <div className='containers'>啦啦啦啦啦啦啦啦啦啦</div>
      </div>
    )
  }
}

export default PullRefresh;
