<template>
    <main>
        <logo id="logo"></logo>
        <div id="canvas"></div>
    </main>
</template>
<script>
var Tone = require('tone')
var p5 = require('p5')
var _ = require('lodash')
import lateAfternoon from './store/synths/lateAfternoon.js'
import logo from './components/logo.vue'
export default {
    components: {
        logo
    },
    data() {
        return {
            started: false,
            canvasMeta: {
                w: window.innerWidth,
                h: window.innerHeight,
                // TODO: something is broken when rows and columns are not the same but for now its a neat effect
                rows: 4,
                columns: 4,
            },
            colors: [{
                h: 267,
                s: 86,
                baseS: 86,
                l: 16
            }, {
                h: 266,
                s: 58,
                baseS: 58,
                l: 23
            }, {
                h: 264,
                s: 45,
                baseS: 45,
                l: 36
            }, {
                h: 266,
                s: 35,
                baseS: 35,
                l: 50
            }, {
                h: 255,
                s: 54,
                baseS: 54,
                l: 61
            }],
            tanSquares: [],
            initialSize: 5,
            initialDeviation: 200,
            deviation: 80,
            points: [],
            current: ''
        }
    },
    computed: {
        containerMeta() {
            let containerMeta = {
                w: this.canvasMeta.w / this.canvasMeta.columns,
                h: this.canvasMeta.h / this.canvasMeta.rows
            }

            return containerMeta
        }
    },
    methods: {
        tanSquare(index) {
            var origin = {
                x: this.containerMeta.w * (index % this.canvasMeta.columns),
                y: this.containerMeta.h * Math.floor(index / this.canvasMeta.rows)
            }

            var colors = _.shuffle(this.colors)

            var newSquare = {
                index: index,
                colors: colors,
                origin: origin,
                cornersX: [origin.x, origin.x + this.containerMeta.w, origin.x + this.containerMeta.w, origin.x],
                cornersY: [origin.y, origin.y, origin.y + this.containerMeta.h, origin.y + this.containerMeta.h],
                center: {
                    x: origin.x + (this.containerMeta.w / 2),
                    y: origin.y + (this.containerMeta.h / 2)
                },
                draw: function(sketch) {
                    for (var index = 0; index < 4; index++) {
                        sketch.fill(this.colors[index].h, this.colors[index].s, this.colors[index].l)
                        sketch.stroke(this.colors[index].h, this.colors[index].s, this.colors[index].l)
                        sketch.triangle(this.cornersX[index], this.cornersY[index], this.center.x, this.center.y, this.cornersX[(index + 1) % 4], this.cornersY[(index + 1) % 4])
                    }
                },
                changeColors: function() {
                    var numToChange = _.random(1, 4)
                    _.times(numToChange, () => {
                        var index = _.random(0, 3)
                        this.colors[index] = _.sample(this.colors)
                    })
                }
            }

            return newSquare
        }
    },
    mounted() {
        // ToneJS
        Tone.Transport.start()

        lateAfternoon.assembleSynth(Tone).then(() => {
            lateAfternoon.patch.out.connect(Tone.Master)
            lateAfternoon.start(Tone, _, undefined, true)
        })


        // P5
        _.times(this.canvasMeta.rows * this.canvasMeta.columns, (index) => {
            let tanSquare = this.tanSquare(index)
            this.tanSquares.push(tanSquare)
        })

        var system = new p5(sketch => {
            // let frameCount = 0

            sketch.setup = () => {
                let canvas = sketch.createCanvas(this.canvasMeta.w, this.canvasMeta.h)
                canvas.parent('canvas')
                sketch.frameRate(60)
                sketch.colorMode(sketch.HSL)
            }

            sketch.draw = () => {
                if (lateAfternoon.bus.tick) {
                    for (let i = 0; i < 2; i++) {
                        this.tanSquares[_.random(15)].changeColors()
                    }
                    lateAfternoon.bus.tick = false
                }

                if (lateAfternoon.bus.colorChange) {
                    this.colors.forEach(color => {
                        if (color.h === 0) {
                            color.h = 360
                        } else {
                            color.h -= 3
                        }
                    })
                    lateAfternoon.bus.colorChange = false
                }

                // if (lateAfternoon.bus.direction === 'up') { // console.log('upupupupupu') // } else if (lateAfternoon.bus.direction === 'down') { // console.log('down') // }
                // if (this.canvasMeta.bus.darken) {
                //     this.colors.forEach(color => {
                //         color.s = color.baseS + Math.sin(frameCount / 200) * 6
                //     })

                //     frameCount++
                // }

                this.tanSquares.forEach((square, index) => {
                    square.draw(sketch)
                })
            }
        })

    }
}
</script>
<style lang="css" scoped="">
  #logo {
      position: fixed;
      bottom: 20px;
      right: 20px;
      opacity: 0.5;
  }

  #logo:hover {
      opacity: 1;
  }
</style>