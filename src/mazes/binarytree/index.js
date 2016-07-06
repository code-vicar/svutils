import _ from 'lodash'

export default function binaryTreeMaze(grid) {
    for (let cell of grid.eachCell()) {
        let neighbors = []

        let north = grid.getCell(cell.north.rowIndex, cell.north.columnIndex)
        if (north) {
            neighbors.push(north)
        }

        let east = grid.getCell(cell.east.rowIndex, cell.east.columnIndex)
        if (east) {
            neighbors.push(east)
        }

        let direction = _.sample(neighbors)

        if (direction) {
            grid.link(cell, direction)
        }
    }

    return grid
}
