import React, { Component } from 'react';
import styles from './Background.scss';

const colors = [
    '#fff',
    '#fafd92',
    '#f7e9fd',
    '#fdf9d2',
    '#e5fbfd',
    '#f3eafd',
    '#e4fdf8',
];

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

let canvas;
let ctx;
let particles = [];

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        canvas = this.canvas.current;
        ctx = canvas.getContext('2d');
        // canvas.width = document.body.clientWidth;
        // canvas.height = document.body.clientHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.001;
            this.distanceFromCenter = window.innerWidth > 768 ? randomIntFromRange(50, 1000) : randomIntFromRange(50, 500);

            this.update = () => {
                const lastPoint = {
                    x: this.x,
                    y: this.y
                };
                this.radians += this.velocity;
                this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
                this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
                this.draw(lastPoint);

                if (this.velocity > 0.1) {
                    this.velocity -= 0.0000001
                } else {
                    this.velocity += 0.0000001
                }
            };

            this.draw = lastPoint => {
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.radius;
                ctx.moveTo(lastPoint.x, lastPoint.y);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
                ctx.closePath();
            };
        }

        for (let i = 0; i < 300; i++ ) {
            const radius = (Math.random() * 2.2) + 1;
            particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)))
        }


        function animate() {
            requestAnimationFrame(animate);
            setTimeout(() => {
                ctx.fillStyle = 'rgba(0, 0, 0, .05)';
            }, 100)
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
            })
        }
        animate();
    }


    render() {
        return <canvas ref={this.canvas}>Canvas element</canvas>
    }
}
