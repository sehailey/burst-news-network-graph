import React from 'react'
import {
    InteractiveForceGraph,
    ForceGraphNode,
    ForceGraphLink
} from 'react-vis-force'

import links from './links.json'
import nodes from './nodes.json'

const data = { links, nodes }
console.log(data)

const getColor = n => {
    const color =
        '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0')
    return color
}

const randInt = () => Math.floor(Math.random() * 100)

const ReactVisDemo = () => {
    return (
        <InteractiveForceGraph simulationOptions={{ height: 900, width: 900 }}>
            {nodes.map(node => (
                <ForceGraphNode
                    key={node.idx}
                    node={{ id: node.name, label: node.label }}
                    fill={node.color}
                />
            ))}

            {links.map(link => (
                <ForceGraphLink
                    key={link.idx}
                    link={{ source: link.source, target: link.target }}
                />
            ))}
            {/* <ForceGraphLink
                link={{ source: 'first-node', target: 'second-node' }}
            /> */}
        </InteractiveForceGraph>
    )
}

export default ReactVisDemo
