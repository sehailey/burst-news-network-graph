import React, { Component } from 'react'
import Konva from 'konva'
import { Stage, Layer, Rect, Text } from 'react-konva'

import { addStar } from './Star'

class StarContainer extends Component {
    render() {
        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        hello, starcontainer<Star />
                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default StarContainer
