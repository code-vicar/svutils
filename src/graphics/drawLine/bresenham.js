export default function drawLine(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1

    let incX = 1
    let incY = 1

    let absDx = Math.abs(dx)
    let absDy = Math.abs(dy)

    // bresenham assumption #1: 0 <= m <= 1
    // slope is greater than 45deg, swap the axes
    let steep = absDx < absDy
    if (steep) {
        let tempAbsDx = absDx
        let tempdx = dx
        let tempx1 = x1
        let tempx2 = x2
        absDx = absDy
        dx = dy
        x1 = y1
        x2 = y2
        absDy = tempAbsDx
        dy = tempdx
        y1 = tempx1
        y2 = tempx2
    }

    // bresenham assumption #2: x2 > x1 && y2 > y1
    // always plot the absolute values, flipping which direction to increment
    if (dx < 0) {
        dx = absDx
        incX = incX * -1
    }
    if (dy < 0) {
        dy = absDy
        incY = incY * -1
    }

    let Pi = 2 * dy - dx
    let line = []
    line.push([x1, y1])
    for (let i = 0; i < dx; i++) {
        x1 = x1 + incX
        if (Pi <= 0) {
            Pi = Pi + 2 * dy
        } else {
            y1 = y1 + incY
            Pi = Pi + 2 * dy - 2 * dx
        }
        if (steep) {
            line.push([y1, x1])
        } else {
            line.push([x1, y1])
        }
    }
    return line
}
