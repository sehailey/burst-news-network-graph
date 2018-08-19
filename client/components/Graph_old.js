import React from 'react'
import links from './links.json'
import nodes from './nodes.json'

const data = { links, nodes }
console.log(data)

const getColor = n => {
    const color =
        '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0')
    return color
}

import { ForceGraph2D } from 'react-force-graph'

const Graph = () => {
    return (
        <div>
            <ForceGraph2D
                graphData={data}
                nodeLabel="HAIII"
                linkDirectionalArrowLength={Math.random() * 1}
                linkDirectionalArrowRelPos={Math.random() * 2}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.id
                    const fontSize = 12 / globalScale
                    ctx.font = `${fontSize}px Sans-Serif`
                    const textWidth = ctx.measureText(label).width
                    const bckgDimensions = [textWidth, fontSize].map(
                        n => n + fontSize * 0.4
                    ) // some padding
                    ctx.drawImage('red-circle-icon-md.png', node.x, node.y)
                    //ctx.fillStyle = getColor(+node.id.slice(2))
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
