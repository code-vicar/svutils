import { Graph } from '@code-vicar/graphlib'
import Grid from '../src/grid'
import BinaryTreeMaze from '../src/mazes/binarytree'

let graph = new Graph()
let grid = new Grid(graph)
let maze = new BinaryTreeMaze(grid)

console.log(maze.toString())
