export default function drawLine(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1

    let Pi = 2 * dy - dx
    let line = []
    line.push([x1, y1])
    for (let i = 0; i < dx; i++) {
        if (Pi <= 0) {
            Pi = Pi + 2 * dy
            line.push([++x1, y1])
        } else {
            Pi = Pi + 2 * dy - 2 * dx
            line.push([++x1, ++y1])
        }
    }
    return line
}
