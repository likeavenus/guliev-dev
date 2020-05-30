import React, { Component } from 'react';
import styles from './Background.scss';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    render() {
        return(<canvas ref={this.canvas}></canvas>)

    }

}