/*
* @Author: zuoyan
* @Date:   2017-12-27 13:54:35
* @Last Modified by:   zuoyan
* @Last Modified time: 2017-12-28 15:17:53
*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import IScroll from '../Iscroll';

export default class Carousel extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const iscrollConfig = {
      		scrollX : true,
			scrollY : false,
			scrollbars : false,
			probeType : 3,
			momentum : false,
			snap:true,
			eventPassthrough:true,
			preventDefault:false
	    };
	     this.scroller = new IScroll(
	     	ReactDOM.findDOMNode(this.refs.hscroller),
	     	iscrollConfig);

	     this.scroller.on('scrollEnd',()=>{
	     	this.scroller.goToPage(1,0,500);
	     })
	}


	render(){
		return(
			<div className="container">
				<div className="parent" ref="hscroller">
					<div className="list">
						<img src={require('../../assets/boy.png')} className="content"/>
						<img src={require('../../assets/boy-1.png')} className="content"/>
						<img src={require('../../assets/boy.png')} className="content"/>
					</div>	
				</div>
				<div className='buttons'>
					<span className='active'></span>
					<span ></span>
					<span ></span>
				</div>
			</div>
		)
		
	}
}
