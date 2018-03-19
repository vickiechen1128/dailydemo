import React, {Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state={
        };
    }
    render() {
        return (
            <div className="root-layout">
                {this.props.children}
            </div>
        );
    }
}