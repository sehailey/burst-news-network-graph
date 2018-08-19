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

const onNodeHover = (node, prevNode) => {
    console.log('HOVER: ', 'node:', node, 'prevNode: ', prevNode)
}

const onNodeClick = node => {
    console.log('CLICK:', 'node:', node)
}
import { ForceGraph2D } from 'react-force-graph'

const Graph = () => {
    return (
        <div>
            <ForceGraph2D
                graphData={data}
                nodeLabel="HAIII"
                nodeAutoColorBy={node => getColor(+node.index)}
                onNodeHover={onNodeHover}
                onNodeClick={onNodeClick}
                d3Force
            />
        </div>
    )
}

export default Graph
