import { Graph } from '@code-vicar/graphlib'
import Grid from '../src/grid'
import SidewinderMaze from '../src/mazes/sidewinder'

let graph = new Graph()
let grid = new Grid(graph)
let maze = new SidewinderMaze(grid)

console.log(maze.toString())
