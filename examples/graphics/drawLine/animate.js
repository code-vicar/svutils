function animateScene() {
    let canvas = document.createElement('canvas')
    canvas.id = 'demoAnimate'
    canvas.width = 300
    canvas.height = 300
    canvas.style = 'border:1px solid black;';

    document.body.appendChild(canvas)

    let offsetX = canvas.offsetLeft
    let offsetY = canvas.offsetTop

    let lastPoint = [15, 0]
    let incXPrev = 1
    let incX = 1
    let incYPrev = -1
    let incY = 0

    let draw = function () {
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgb(255,255,255)'
        ctx.fillRect(0, 0, 300, 300)

        ctx.fillStyle = 'rgb(0,0,0)'
        let posx = lastPoint[0]
        let posy = lastPoint[1]

        lastPoint[0] = lastPoint[0] + incX
        lastPoint[1] = lastPoint[1] + incY

        if (incX !== 0 && lastPoint[0] % 30 === 0) {
            incXPrev = incX
            incX = 0
            incY = incYPrev * -1
        } else if (incY !== 0 && lastPoint[1] % 30 === 0) {
            incYPrev = incY
            incY = 0
            incX = incXPrev * -1
        }

        let line = drawLine(15, 15, posx, posy)
        for (let i = 0; i < line.length; i++) {
            let point = line[i]
            ctx.fillRect(point[0] * 10, point[1] * 10, 10, 10)
        }
        window.requestAnimationFrame(draw)
    }


    window.requestAnimationFrame(draw)
}

animateScene()
