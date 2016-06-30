import _ from 'lodash'
import { Graph } from 'graphlib'

export default class Grid {
    constructor(rows, columns) {
        if (_.isInteger(size) && size >= 0) {
            this.size = size
        } else {
            this.size = 10
        }

        this._graph = new Graph()

        initialize_grid.call(this, rows, columns)
    }

    toString() {
        return console.log(this._graph)
    }
}

function initialize_grid(rows, columns) {
    for (let row of _.range(rows)) {
        for (let column of _.range(columns)) {
            this._graph.addVertex({
                '@@vertexId': `${row}${column}`,
                row,
                column
            })
        }
    }
}

