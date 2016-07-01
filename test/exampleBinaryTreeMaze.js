import { Graph } from '@code-vicar/graphlib'
import Grid from '../src/grid'
import BinaryTreeMaze from '../src/mazes/binarytree'
import dijkstra from '../src/pathfinding/dijkstra'

let graph = new Graph()
let grid = new Grid(graph, 10, 10)
let maze = new BinaryTreeMaze(grid)

console.log(maze.toString())

let source = grid.getCell(0, 9)

dijkstra(graph, source)

console.log(maze.toString())
