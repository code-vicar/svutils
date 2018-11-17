const { default: Grid } = require('../../lib/grid')
const { DijkstraFrames } = require('../../lib/pathfinding/dijkstra')

let grid = new Grid(12, 12)
grid.runSidewinderMaze()

console.log(grid.toString())

let source = grid.getCell(5, 0)
let dijkstra = new DijkstraFrames(grid.graph)

let path = dijkstra.findPathFrom(grid.getCell(0, 5), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)

path = dijkstra.findPathFrom(grid.getCell(5, 10), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)
