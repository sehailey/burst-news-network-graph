import Konva from 'konva'
import { Stage, Layer, Rect, Text } from 'react-konva'

let width = window.innerWidth
let height = window.innerHeight

let tween = null

const addStar = (layer, stage) => {
    let scale = Math.random()

    let star = new Konva.Star({
        x: Math.random() * stage.getWidth(),
        y: Math.random() * stage.getHeight(),
        numPoints: 5,
        innerRadius: 30,
        outerRadius: 50,
        fill: '#89b717',
        opacity: 0.8,
        draggable: true,
        scale: {
            x: scale,
            y: scale
        },
        rotation: Math.random() * 180,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: {
            x: 5,
            y: 5
        },
        shadowOpacity: 0.6,
        // custom attribute
        startScale: scale
    })

    layer.add(star)
}
let stage = new Konva.Stage({
    container: 'app',
    width: width,
    height: height
})

let layer = new Konva.Layer()
let dragLayer = new Konva.Layer()

for (let n = 0; n < 30; n++) {
    addStar(layer, stage)
}

stage.add(layer, dragLayer)

stage.on('dragstart', function(evt) {
    let shape = evt.target
    // moving to another layer will improve dragging performance
    shape.moveTo(dragLayer)
    stage.draw()

    if (tween) {
        tween.pause()
    }
    shape.setAttrs({
        shadowOffset: {
            x: 15,
            y: 15
        },
        scale: {
            x: shape.getAttr('startScale') * 1.2,
            y: shape.getAttr('startScale') * 1.2
        }
    })
})

stage.on('dragend', function(evt) {
    let shape = evt.target
    shape.moveTo(layer)
    stage.draw()
    shape.to({
        duration: 0.5,
        easing: Konva.Easings.ElasticEaseOut,
        scaleX: shape.getAttr('startScale'),
        scaleY: shape.getAttr('startScale'),
        shadowOffsetX: 5,
        shadowOffsetY: 5
    })
})

export default addStar
