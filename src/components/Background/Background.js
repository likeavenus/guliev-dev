import React, { Component } from 'react';
import * as THREE from 'three';
import styles from './Background.scss';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    drawCube = () => {
        console.log(THREE);
        const canvas = this.canvas.current;
    };


    componentDidMount() {
        this.drawCube();
    }

    render() {
        return (
            <canvas ref={this.canvas}></canvas>
        )
    }

}