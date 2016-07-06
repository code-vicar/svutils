import _ from 'lodash'
import Grid from '../src/grid'
import { DijkstraFrames } from '../src/pathfinding/dijkstra'

let grid = new Grid(5, 5)
grid.runSidewinderMaze()

console.log(grid.toString())

let source = grid.getCell(4, 0)
let dijkstra = new DijkstraFrames(grid.graph)

let path = dijkstra.findPathFrom(grid.getCell(2, 0), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)

path = dijkstra.findPathFrom(grid.getCell(0, 4), source)
dijkstra.drawFrames(grid)
dijkstra.drawPath(grid, path)
