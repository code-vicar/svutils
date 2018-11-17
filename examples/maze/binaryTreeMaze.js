const { default: Grid } = require('../../lib/grid')
const { DijkstraFrames } = require('../../lib/pathfinding/dijkstra')

let grid = new Grid(5, 5)
grid.runBinaryTreeMaze()

console.log(grid.toString())

let source = grid.getCell(4, 0)
let dijkstra = new DijkstraFrames(grid.graph)

let path = dijkstra.findPathFrom(grid.getCell(2, 0), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)

path = dijkstra.findPathFrom(grid.getCell(0, 4), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)
