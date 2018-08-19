import React from 'react'
import links from './links.json'
import nodes from './nodes.json'

const data = { links, nodes }
console.log(data)
import { ForceGraph2D } from 'react-force-graph'

const Graph = () => {
    return (
        <div>
            <ForceGraph2D graphData={data} />
        </div>
    )
}

export default Graph
