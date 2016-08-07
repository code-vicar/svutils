import _ from 'lodash'
import { Graph } from '@code-vicar/graphlib'

import binarytree from '../mazes/binarytree'
import sidewinder from '../mazes/sidewinder'

export default class Grid {
    constructor(rows = 10, columns = 10, graph) {
        if (!_.isInteger(rows) || rows <= 0) {
            rows = 10
        }
        if (!_.isInteger(columns) || columns <= 0) {
            columns = 10
        }

        this._rows = _.range(rows)
        this._columns = _.range(columns)

        this._rowsLength = rows
        this._columnsLength = columns
        this._size = rows * columns

        if (!graph) {
            graph = new Graph()
        }

        this.graph = graph

        _.forEach(['North', 'South', 'East', 'West'], (direction) => {
            let _direction = direction.toLowerCase()

            this[`get${direction}`] = (cell) => {
                return this.getCell(cell[_direction].rowIndex, cell[_direction].columnIndex)
            }

            this[`link${direction}`] = (cell) => {
                let neighbor = this[`get${direction}`](cell)
                if (neighbor) {
                    this.link(cell, neighbor)
                    return true
                }
                return false
            }

            this[`hasLink${direction}`] = (cell) => {
                let neighbor = this[`get${direction}`](cell)
                return this.graph.hasEdge(cell, neighbor)
            }
        })

        this.init()
    }

    get rows() {
        return this._rows
    }

    get columns() {
        return this._columns
    }

    get rowsLength() {
        return this._rowsLength
    }

    get columnsLength() {
        return this._columnsLength
    }

    get size() {
        return this._size
    }

    getCell(rowIndex, columnIndex) {
        if (!_.inRange(rowIndex, this.rowsLength) || !_.inRange(columnIndex, this.columnsLength)) {
            return
        }

        return this.graph.getVertex(`${rowIndex}-${columnIndex}`)
    }

    *eachCell() {
        for (let rowIndex of this.rows) {
            for (let columnIndex of this.columns) {
                yield this.getCell(rowIndex, columnIndex)
            }
        }
    }

    getRandomCell() {
        let rowIndex = _.random(this.rowsLength - 1)
        let columnIndex = _.random(this.columnsLength - 1)

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

    init() {
        initialize_graph.call(this)
        return this
    }

    link(cell1, cell2) {
        this.graph.connect(cell1, cell2)
    }

    setCellBody(cb) {
        this._cellBodyCB = cb
    }

    toString() {
        let buffer = '+' + print('---+', this.columnsLength) + '\n'
        for (let row of this.eachRow()) {
            let top = '|'
            let bottom = '+'

            for (let cell of row) {
                if (!cell) {
                    cell = dummyCell()
                }

                let body = '   '
                if (typeof this._cellBodyCB === 'function') {
                    body = this._cellBodyCB(cell) || body
                }

                let east_boundary = (this.hasLinkEast(cell)) ? ' ' : '|'

                top += body + east_boundary

                let south_boundary = (this.hasLinkSouth(cell)) ? '   ' : '---'
                let corner = '+'

                bottom += south_boundary + corner
            }

            buffer += top + '\n'
            buffer += bottom + '\n'
        }

        return buffer
    }

    runBinaryTreeMaze() {
        binarytree(this)
        return this
    }

    runSidewinderMaze() {
        sidewinder(this)
        return this
    }
}

function initialize_graph() {
    for (let rowIndex of this.rows) {
        for (let columnIndex of this.columns) {
            this.graph.addVertex({
                '@@vertexId': `${rowIndex}-${columnIndex}`,
                rowIndex,
                columnIndex,
                north: {
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

function print(str, times) {
    let output = ''
    for (let time of _.range(times)) {
        output += str
    }
    return output
}

function dummyCell() {
    let nothing = {
        rowIndex: -1,
        columnIndex: -1
    }
    return {
        north: nothing,
        east: nothing,
        south: nothing,
        west: nothing
    }
}
