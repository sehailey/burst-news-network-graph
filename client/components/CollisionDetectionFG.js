import React from 'react'
import d3 from 'd3'

const N = 80
const nodes = [...Array(N).keys()].map(() => ({
    // Initial velocity in random direction
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1
}))

import { ForceGraph2D } from 'react-force-graph'

class CollisionDetectionFG extends React.Component {
    componentDidMount() {
        // Deactivate existing forces
        this.fg.d3Force('center', null)
        this.fg.d3Force('charge', null)
        // Add collision and bounding box forces
        this.fg.d3Force('collide', d3.forceCollide(4))
        this.fg.d3Force('box', () => {
            const SQUARE_HALF_SIDE = N * 2
            nodes.forEach(node => {
                const x = node.x || 0,
                    y = node.y || 0
                // bounce on box walls
                if (Math.abs(x) > SQUARE_HALF_SIDE) {
                    node.vx *= -1
                }
                if (Math.abs(y) > SQUARE_HALF_SIDE) {
                    node.vy *= -1
                }
            })
        })
    }
    render() {
        return (
            <ForceGraph2D
                ref={el => (this.fg = el)}
                graphData={{ nodes, links: [] }}
                cooldownTime={Infinity}
                d3AlphaDecay={0}
                d3VelocityDecay={0}
            />
        )
    }
}
export default CollisionDetectionFG
