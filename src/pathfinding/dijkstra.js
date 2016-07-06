import _ from 'lodash'
import { BFS_generator } from '@code-vicar/graphlib'

export default class Dijkstra {
    constructor(graph) {
        this._graph = graph
        this.initData()
    }

    compute(source) {
        this._iter = this.compute_generator(source)
    }

    next() {
        if (this._iter && (!this._last || !this._last.done)) {
            this._last = this._iter.next()
        }
        return !this._last.done
    }

    *compute_generator(source) {
        this.initData()
        this._source = source

        let search = BFS_generator(this._graph, source, {
            yieldEdge: true
        })

        this._setDistance(source, 0)
        yield

        for (let edgeData of search) {
            let neighbor = edgeData.neighbor
            let vertex = edgeData.vertex
            let state = edgeData.state

            this._setDistance(neighbor, this.getDistance(vertex) + 1)
            this._setSearchState(state)

            yield
        }
    }

    findPathFrom(cell, source) {
        // TODO check if cell/source are in graph
        if (!source && !this._source) {
            throw new Error('Can\'t find path until a source vertex is chosen')
        }
        if (source && (source !== this._source)) {
            this.compute(source)
        }

        let path = [cell]

        let parent = this.getParent(cell)
        while (!parent && this.next()) {
            parent = this.getParent(cell)
        }

        while (parent) {
            path.push(parent)
            parent = this.getParent(parent)
        }

        return path
    }

    getParent(cell) {
        if (!this._data || !this._data.searchState) {
            return
        }
        return this._data.searchState.getParent(cell)
    }

    getDistance(cell) {
        return this._data.distances.get(cell)
    }

    _setDistance(cell, distance) {
        this._data.distances.set(cell, distance)
    }

    _setSearchState(state) {
        this._data.searchState = state
    }

    initData() {
        this._data = {
            distances: new Map()
        }
    }
}

export class DijkstraFrames extends Dijkstra {
    constructor(graph) {
        super(graph)
    }

    compute(...args) {
        console.log('compute')
        this.frames = []
        super.compute(...args)
    }

    findPathFrom(cell, source) {
        console.log('findPathFrom')
        this._paths = this._paths || []
        this._paths.push({cell, source})
        return super.findPathFrom(cell, source)
    }

    next() {
        let path
        if (this._paths && this._paths.length > 0) {
            path = this._paths[this._paths.length - 1]
        }
        if (this.frames.length === 0) {
            this.frames.push({data: {distances: _.clone(this._data.distances), searchState: _.clone(this._data.searchState)}, path})
        }
        let ret = super.next()
        this.frames.push({data: {distances: _.clone(this._data.distances), searchState: _.clone(this._data.searchState)}, path})
        return ret
    }

    drawFrames(grid) {
        let backupdata = this._data
        let path
        if (this._paths && this._paths.length > 0) {
            path = this._paths[this._paths.length - 1]
        }
        for (let frame of this.frames) {
            if (frame.path === path) {
                this._data = frame.data
                grid.setCellBody((cell) => {
                    return _.pad(this.getDistance(cell), 3)
                })
                console.log(grid.toString())
            }
        }
        this._data = backupdata
    }

    drawPath(grid, path) {
        grid.setCellBody((cell) => {
            if (_.includes(path, cell)) {
                return _.pad(this.getDistance(cell), 3)
            }
        })
        console.log(grid.toString())
    }
}
