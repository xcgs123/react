import React from 'react';
import './index.less';
import {getDivCount} from './LoaderUtil.js';

export default class Loaders extends React.Component {
    constructor(props) {
        super(props);
    }

    getPlaceholderDiv() {
        var childrenCount = getDivCount(this.props.loadingStyle);
        const children = [];
        const childStyle = {};
        if('color' in this.props) {
            childStyle.backgroundColor = this.props.color;
        }
        if('width' in this.props) {
            childStyle.width = this.props.width;
        }
        if('height' in this.props) {
            childStyle.height = this.props.height;
        }
        for(let i=0;i<childrenCount;i++) {
            children.push(<div key={i} style={childStyle}/>)
        }
        return children;
    }

    render() {
        return (
            <div className="loaders"> 
                <div className={"loader-inner " + this.props.loadingStyle}>
                 {this.getPlaceholderDiv()}
                </div>
            </div>
        );
    }
}

Loaders.propTypes = {
    color : React.PropTypes.string,
    loadingStyle : React.PropTypes.string,
    width : React.PropTypes.string,
    height : React.PropTypes.string
}
