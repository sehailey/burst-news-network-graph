import React from 'react'
import * as d3 from 'd3'
import data from './data.json'

const width = 960
const height = 500

const id = d => d.index

const nodes = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Carol' }]
const links = [
    { source: 0, target: 1 }, // Alice → Bob
    { source: 1, target: 2 } // Bob → Carol
]

const simulation = d3
    .forceSimulation()
    .nodes(nodes)
    .force(
        'link',
        d3.forceLink().id(function(d) {
            return d.id
        })
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))

console.log(simulation)
const Graph = () => {
    return <div>hi!!!!</div>
}

export default Graph
