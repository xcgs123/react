import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Loaders from '../Loaders/index.js';


import './index.less';
/**
 *  下拉刷新
 */
export default class PullToRefresh extends Component {

    static propTypes = {
        /**
         * 容器高度
         */
        height: PropTypes.string,
        /**
         * 是否开启下拉刷新
         */
        onRefresh: PropTypes.bool,
        /**
         * 刷新时请求回调，传入 resolve 
         */
        onRefreshHandle: PropTypes.func,
        /**
         * 默认的loder, 必须是一个function。会传入下拉的进度（progress）  
         */
        loaderDefaultIcon: PropTypes.func,
        /**
         * loading icon  
         */
        loaderLoadingIcon: PropTypes.any,
        /**
         * loader height  
         */
        loaderHeight: PropTypes.number,
    };

    static defaultProps = {
        height: '100%',
        loaderHeight: 50, 
        onRefresh: true,
        onRefreshHandle: (resolve, reject) => setTimeout( ()=> resolve(), 1000),
        loaderLoadingIcon: <Loaders loadingStyle="quarter-ring-spin" />,
        loaderDefaultIcon: (progress) => {
            const upLoadingStyle = classNames('fa',{'rotate-down': progress == 100});
            return (
                <div style={{ flex: 1, padding: '5px' }}>
                    <i className={upLoadingStyle}>↑</i>
                </div>
            );
        },
    };

    constructor(props) {
        super(props);
    
        this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.resolveRefresh = this.resolveRefresh.bind(this);
    }

    resolveRefresh(){
        this.setState({
            loading: false,
            animating: true,
            pullPercent: 0
        }, ()=>{
            setTimeout(()=>this.setState({ animating: false}), 500);
        });
    }

    handleTouchStart(e){
        if (this.state.touching || this.state.loading || !this.props.onRefresh ) return;

        let $content = ReactDOM.findDOMNode(this.refs.content);

        this.setState({
            touching: true,
            touchId: e.targetTouches[0].identifier,   //???
            ogY: this.state.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
            animating: false,
            initScrollTop: $content.scrollTop
        });
    }

    handleTouchMove(e){
        if (!this.state.touching || this.state.loading || !this.props.onRefresh) return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;


        const pageY = e.targetTouches[0].pageY;
        let diffY = pageY - this.state.ogY;

        //if it's scroll
        if (diffY < 0) return;

        //if it's not at top
        let $content = ReactDOM.findDOMNode(this.refs.content);
        if ($content.scrollTop > 0) return;

        //prevent move background
        e.preventDefault();

        diffY = ( diffY - this.state.initScrollTop ) > 100 ? 100 : ( diffY - this.state.initScrollTop );

        this.setState({
            pullPercent: diffY
        });
    }

    handleTouchEnd(e){
        if (!this.state.touching || this.state.loading || !this.props.onRefresh) return;

        let pullPercent = this.state.pullPercent;
        let loading = false;

        if (pullPercent === 100) {
            loading = true;
        } else {
            pullPercent = 0;
        }

        this.setState({
            touching: false,
            ogY: 0,
            touchId: undefined,
            initScrollTop: 0,
            animating: loading,
            pullPercent,
            loading
        }, ()=>{
            //triger after ui change
            if (loading) this.props.onRefreshHandle(this.resolveRefresh);
        });
    }


    render(){
        const { className, children, height, loaderHeight, loaderDefaultIcon, loaderLoadingIcon, onRefresh, ...domProps } = this.props;
        let cls = classNames('yh-ui-ptr', className);

        let containerStyle = {
            height,
        };

        let loaderStyle = {
            height: loaderHeight,
            marginTop: `${ -loaderHeight + (this.state.pullPercent / (100 / loaderHeight))}px`,
            transition: this.state.animating ? 'all .5s' : 'none'
        };

        return (
            <div className={cls} style={ containerStyle } {...domProps}>
                <div
                    className="yh-ui-ptr-loader"
                    style={loaderStyle}
                >
                    {
                        this.state.loading ?
                        loaderLoadingIcon :
                        loaderDefaultIcon(this.state.pullPercent)
                    }
                </div>
                <div
                    className="yh-ui-ptr-content"
                    ref="content"
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                >
                    { children }
                </div>
            </div>
        );
    }

}