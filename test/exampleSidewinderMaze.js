import { Graph } from '@code-vicar/graphlib'
import Grid from '../src/grid'
import SidewinderMaze from '../src/mazes/sidewinder'
import dijkstra from '../src/pathfinding/dijkstra'

let graph = new Graph()
let grid = new Grid(graph, 11, 11)
let maze = new SidewinderMaze(grid)

console.log(maze.toString())

let source = grid.getCell(0, 5)

dijkstra(graph, source)

console.log(maze.toString())
