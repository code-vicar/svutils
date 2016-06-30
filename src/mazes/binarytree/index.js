export default class BinaryTreeMaze {
    constructor(grid) {
        this._grid = grid

        for (let cell of grid.eachCell()) {
            let neighbors = []

            let north
            try {
                north = grid.getCell(cell.north.rowIndex, cell.north.columnIndex)
            } catch(e) {
                console.log(e)
            }

            let east
            try {
                east = grid.getCell(cell.east.rowIndex, cell.east.columnIndex)
            } catch(e) {
                console.log(e)
            }

            console.log(cell)
        }
    }
}
