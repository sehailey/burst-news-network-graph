import React, { Component } from 'react'
import { Stage, Layer, Rect, Text } from 'react-konva'
import Konva from 'konva'

class ColoredRect extends Component {
    state = {
        color: 'green'
    }
    handleClick = evt => {
        this.setState({
            color: Konva.Util.getRandomColor()
        })
        console.log(evt.target.value)
    }
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try click on rect" />
                    <Rect
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={this.state.color}
                        shadowBlur={5}
                        onClick={this.handleClick}
                    />
                </Layer>
            </Stage>
        )
    }
}

export default ColoredRect
