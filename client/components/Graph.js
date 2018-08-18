import React from 'react'
import d3 from 'd3'
import data from './data.json'

const width = 960
const height = 500

const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

const force = d3.layout
    .force()
    .gravity(0.05)
    .distance(100)
    .charge(-100)
    .size([width, height])

d3.json(data, function(json) {
    force
        .nodes(json.nodes)
        .links(json.links)
        .start()

    const link = svg
        .selectAll('.link')
        .data(json.links)
        .enter()
        .append('line')
        .attr('class', 'link')
        .style('stroke-width', function(d) {
            return Math.sqrt(d.weight)
        })

    const node = svg
        .selectAll('.node')
        .data(json.nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .call(force.drag)

    node.append('circle').attr('r', '5')

    node
        .append('text')
        .attr('dx', 12)
        .attr('dy', '.35em')
        .text(function(d) {
            return d.name
        })

    force.on('tick', function() {
        link
            .attr('x1', function(d) {
                return d.source.x
            })
            .attr('y1', function(d) {
                return d.source.y
            })
            .attr('x2', function(d) {
                return d.target.x
            })
            .attr('y2', function(d) {
                return d.target.y
            })

        node.attr('transform', function(d) {
            return 'translate(' + d.x + ',' + d.y + ')'
        })
    })
})

const Graph = () => {
    return (
        <div>
            return (
            <svg width={width} height={height}>
                {/*paths*/}
            </svg>
        </div>
    )
}

export default Graph
