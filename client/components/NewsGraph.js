import React from 'react'
import { ForceGraph2D } from 'react-force-graph'
import links from './links0.json'
import nodes from './nodes0.json'

const data = {
    links,
    nodes
}
console.log(data)

const onNodeHover = (node, prevNode) => {
    console.log('HOVER: ', 'node:', node, 'prevNode: ', prevNode)
}

const onNodeClick = node => {
    console.log('CLICK:', 'node:', node)
}

const NewsGraph = () => {
    return (
        <div>
            <ForceGraph2D
                graphData={data}
                nodeLabel="newsGraph"
                onNodeHover={onNodeHover}
                onNodeClick={onNodeClick}
                d3ForceLink={links}
            />
        </div>
    )
}

export default NewsGraph
