import React, { useEffect, useState } from 'react';
import Stats from 'stats.js';

const MyComponent = () => {
    const [canvas, setCanvas] = useState(null);
    const [context, setContext] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [net, setNet] = useState(null);
    const [rafID, setRafID] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            clearTimeout(timeoutID);
            window.cancelAnimationFrame(rafID);
            timeoutID = setTimeout(init, 500);
        };

        const handleMouseMove = (e) => {
            const c = canvas;
            const pos = getMousePos(c, e);
            setMousePos(pos);
        };

        const handleTouchMove = (e) => {
            handleMouseMove(e.touches[0]);
        };

        const stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const animate = () => {
            stats.begin();
            stats.end();

            requestAnimationFrame(animate);
        };

        let timeoutID = null;

        if (canvas && canvas.getContext) {
            setContext(canvas.getContext("2d"));
            window.addEventListener('resize', handleResize, false);
            window.addEventListener('mousemove', handleMouseMove, false);
            window.addEventListener('touchmove', handleTouchMove, false);
            animate();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [canvas]);

    useEffect(() => {
        if (context) {
            init();
        }
    }, [context]);

    const init = () => {
        setRafID(window.requestAnimationFrame(render));

        const nodesLength = Math.floor(canvas.width * canvas.height / 3000);

        // Nodes
        const newNet = new Net();
        newNet.populate(nodesLength);
        setNet(newNet);
    };

    const render = (e) => {
        net.update();
        net.draw();
        net.connect(120);
        setRafID(window.requestAnimationFrame(render));
    };

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect(); // abs. size of element
        const scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for X
        const scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

        return {
            x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
            y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
        }
    };

    // Net
    class Net {
        constructor() {
            this.nodes = [];
            this.length = undefined;
        }

        populate(length) {
            this.length = length;

            for (let i = 0; i < length; i++) {
                const xPos = Math.floor(getRandom(0, canvas.width));
                const yPos = Math.floor(getRandom(0, canvas.height));
                this.nodes.push(new Node(xPos, yPos));
            }
        }

        update() {
            for (let i = 0; i < this.length; i++) {
                this.nodes[i].update();
            }
        }

        draw() {
            context.fillStyle = "#030303";
            context.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < this.length; i++) {
                this.nodes[i].draw();
            }
        }

        connect(distanceMax) {
            // Loop through all nodes
            for (let i = 0; i < this.length - 1; i++) {
                this.nodes[i].connections = [];

                // Store connected nodes in node object
                for (let j = 0; j < this.length - 1; j++) {
                    const a = this.nodes[j].x - this.nodes[i].x;
                    const b = this.nodes[j].y - this.nodes[i].y;
                    const c = Math.sqrt(a * a + b * b);

                    const xToMouse = this.nodes[j].x - mousePos.x;
                    const yToMouse = this.nodes[j].y - mousePos.y;
                    this.nodes[i].dToMouse = Math.floor(Math.sqrt(xToMouse * xToMouse + yToMouse * yToMouse));

                    let d = distanceMax / this.nodes[i].dToMouse * 200;

                    if (distanceMax / this.nodes[i].dToMouse * 200 > distanceMax) {
                        d = distanceMax;
                    }

                    if (j > i && c < d) {
                        this.nodes[i].connections.push(j);
                    }
                }

                // Draw line between dots
                for (let k = 0; k < this.nodes[i].connections.length; k++) {
                    context.beginPath();
                    context.moveTo(this.nodes[i].x, this.nodes[i].y);
                    context.lineTo(this.nodes[this.nodes[i].connections[k]].x, this.nodes[this.nodes[i].connections[k]].y);
                    context.strokeStyle = "rgba(255,255,255," + this.nodes[i].depth / 4 + ")";
                    context.stroke();
                }
            }
        }
    }

    // Node
    class Node {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.radius = 2;
            this.depth = Math.floor(getRandom(1, 10)) / 10;
        }

        update() {
            const velocity = (1 - this.depth) / 5;
            this.x = this.x + velocity;

            if (this.x > canvas.width || this.x < 0) {
                this.x = 0;
            }
        }

        draw() {
            const alpha = 1 - this.depth;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'rgba(255,255,255,' + alpha + ')';
            context.fill();
        }
    }

    // Helpers
    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    return (
        <div>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <canvas id="inner_heading-canvas" width="600" height="600" ref={node => setCanvas(node)}></canvas>
        </div>
    );
};

export default MyComponent;