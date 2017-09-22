import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';
import Loading from '../../component/Loading/Loading.js'


class PullRefresh extends Component{
  constructor(props){
      super(props);
      this.state = {
          activeIndex:0
      }
  }

  doRefresh(){
    alert(11)
    // return (
    //   <div>1111</div>
    // )
  }

  render(){
    return(
      <div className="refresh">
        <div onClick={this.doRefresh}>点击刷新</div>

        <Loading />
        <div className='containers'>啦啦啦啦啦啦啦啦啦啦</div>
      </div>
    )
  }
}

export default PullRefresh;
