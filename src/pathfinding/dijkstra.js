import { BFS_generator } from '@code-vicar/graphlib'

export default function dijkstra(graph, source) {
    source.distance = 0
    let search = BFS_generator(graph, source, {
        yieldEdge: true
    })

    for (let edge of search) {
        edge.neighbor.distance = edge.vertex.distance + 1
    }
}
