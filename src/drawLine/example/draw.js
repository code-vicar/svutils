function drawScene() {
    let canvas = document.createElement('canvas')
    canvas.id = 'demo'
    canvas.width = 300
    canvas.height = 300
    canvas.style = 'border:1px solid red;';
    canvas.onmousemove = draw

    document.body.appendChild(canvas)

    let offsetX = canvas.offsetLeft
    let offsetY = canvas.offsetTop

    function draw(e) {
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgb(255,255,255)'
        ctx.fillRect(0, 0, 300, 300)

        ctx.fillStyle = 'rgb(0,0,0)'
        let posx = e.clientX - offsetX
        let posy = e.clientY - offsetY

        posx = Math.floor(posx / 10)
        posy = Math.floor(posy / 10)

        let line = drawLine(15, 15, posx, posy)
        for (let i = 0; i < line.length; i++) {
            let point = line[i]
            ctx.fillRect(point[0]*10, point[1]*10, 10, 10)
        }
    }
}

drawScene()
