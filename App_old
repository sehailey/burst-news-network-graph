// import React, { Component } from 'react'
import graphFile from './graphFile'

import d3 from 'd3'

const test = () => {
    console.log('hello, world!')
}

test()
const data = [
    { source: 'Baratheon', target: 'Lannister' },
    { source: 'Baratheon', target: 'Stark' },
    { source: 'Lannister', target: 'Stark' },
    { source: 'Stark', target: 'Bolton' }
]

/*
source -> target
each doc has multiple topics (with multiple weights)
so doc -> topic = manytomany and viceversa

const articleId = 1
const topicId = 1


 const link = {"source": 1, "target": 1, "weight": 0.35}
 docId  topicId   weight topicId    weight  topicId weight  topicId weight
 1		7	      0.336	  4	        0.18	8	    0.143	5	    0.085

 so id, source (this will be from the file that was fed into the model (hopefully), so maybe I can make sure it's named after the news source or something)

and then a varying number of topicIds and weights. so for each document, I will need to loop through the rows (and they don't have column ids, how stupid!) and catch the topicIds.

*/

const topicData = [
    { source: 1, target: 7, weight: 0.336 },
    { source: 1, target: 4, weight: 0.18 }
]

const links = data
const nodes = {}

// compute nodes from links data
links.forEach(function(link) {
    link.source =
        nodes[link.source] || (nodes[link.source] = { name: link.source })
    link.target =
        nodes[link.target] || (nodes[link.target] = { name: link.target })
})

const width = 960,
    height = 500

const renderGraph = () => {
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

    d3.json('http://localhost:8080/graphFile.json', function(json) {
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

        node.append('text')
            .attr('dx', 12)
            .attr('dy', '.35em')
            .text(function(d) {
                return d.name
            })

        force.on('tick', function() {
            link.attr('x1', function(d) {
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
}

export default renderGraph
