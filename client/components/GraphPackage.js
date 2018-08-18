import React from 'react'
import data from 'data.json'
import { ForceGraph2D } from 'react-force-graph'

const Graph = () => {
    return (
        <div>
            <ForceGraph2D graphData={data} />
        </div>
    )
}

export default Graph
