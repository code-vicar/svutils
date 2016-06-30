import _ from 'lodash'
import { Graph } from '@code-vicar/graphlib'

export default class Grid {
    constructor(rows = 10, columns = 10) {
        if (!_.isInteger(rows) || rows <= 0) {
            rows = 10
        }
        if (!_.isInteger(columns) || columns <= 0) {
            columns = 10
        }

        this.rows = _.range(rows)
        this.columns = _.range(columns)

        this._size = rows * columns
        this._graph = new Graph()

        initialize_grid.call(this)
    }

    get size() {
        return this._size
    }

    getCell(rowIndex, columnIndex) {
        if (!_.inRange(rowIndex, this.rows.length)) {
            throw new Error(`Index ${rowIndex} out of range ${this.rows.length}`)
        }
        if (!_.inRange(columnIndex, this.columns.length)) {
            throw new Error(`Index ${columnIndex} out of range ${this.columns.length}`)
        }

        return this._graph.getVertex(`${rowIndex}${columnIndex}`)
    }

    *eachCell() {
        for (let rowIndex of this.rows) {
            for (let columnIndex of this.columns) {
                yield this.getCell(rowIndex, columnIndex)
            }
        }
    }

    getRandomCell() {
        let rowIndex = _.random(this.rows.length - 1)
        let columnIndex = _.random(this.columns.length - 1)

        return this.getCell(rowIndex, columnIndex)
    }

    getRow(rowIndex) {
        let row = []
        for (let columnIndex of this.columns) {
            row.push(this.getCell(rowIndex, columnIndex))
        }

        return row
    }

    *eachRow() {
        for (let rowIndex of this.rows) {
            yield this.getRow(rowIndex)
        }
    }

    toString() {
        return console.log(this._graph)
    }
}

function initialize_grid() {
    for (let rowIndex of this.rows) {
        for (let columnIndex of this.columns) {
            this._graph.addVertex({
                '@@vertexId': `${rowIndex}${columnIndex}`,
                rowIndex,
                columnIndex,
                north:{
                    rowIndex: rowIndex - 1,
                    columnIndex
                },
                east: {
                    rowIndex,
                    columnIndex: columnIndex + 1
                },
                south: {
                    rowIndex: rowIndex + 1,
                    columnIndex
                },
                west: {
                    rowIndex,
                    columnIndex: columnIndex - 1
                }
            })
        }
    }
}
