import * as heapsort from './sort/heapsort'
import Dijkstra, { DijkstraFrames } from './pathfinding'
import binarytree from './mazes/binarytree'
import sidewinder from './mazes/sidewinder'
import Grid from './grid'
import bresenhamLineDrawingAlg from './graphics/drawLine/bresenham'
import BinaryHeap from './collection/binaryheap'

module.exports = {
    Sort: {
        heapsort
    },
    Pathfinding: {
        Dijkstra,
        DijkstraFrames
    },
    Mazes: {
        binarytree,
        sidewinder
    },
    Grid,
    Graphics: {
        drawLine: bresenhamLineDrawingAlg
    },
    Collections: {
        BinaryHeap
    }
}
