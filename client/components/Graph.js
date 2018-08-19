import React from 'react'
import links from './links.json'
import nodes from './nodes.json'

const data = { links, nodes }
console.log(data)
import { ForceGraph2D } from 'react-force-graph'

const Graph = () => {
    return (
        <div>
            <ForceGraph2D
                graphData={data}
                nodeColor="blue"
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = 'yat'
                    const fontSize = 12 / globalScale
                    ctx.font = `${fontSize}px Sans-Serif`
                    const textWidth = ctx.measureText(label).width
                    const bckgDimensions = [textWidth, fontSize].map(
                        n => n + fontSize * 0.2
                    ) // some padding
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
                    ctx.fillRect(
                        node.x - bckgDimensions[0] / 2,
                        node.y - bckgDimensions[1] / 2,
                        ...bckgDimensions
                    )
                    ctx.textAlign = 'center'
                    ctx.textBaseline = 'middle'
                    ctx.fillStyle = 'black'
                    ctx.fillText(label, node.x, node.y)
                }}
            />
        </div>
    )
}

export default Graph
