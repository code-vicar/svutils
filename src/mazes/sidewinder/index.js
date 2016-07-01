import _ from 'lodash'

export default class SidewinderMaze {
    constructor(grid) {
        this._grid = grid

        let rowIdx = 0
        for (let row of grid.eachRow()) {
            let run = []

            let columnIdx = 0
            for (let cell of row) {
                if (rowIdx === 0) {
                    grid.linkEast(cell)
                    continue
                }

                run.push(cell)
                if (columnIdx === (grid.columnsLength - 1) || _.random(0, 1) === 0) {
                    let winner = _.sample(run)
                    grid.linkNorth(winner)
                    run = []
                } else {
                    grid.linkEast(cell)
                }

                columnIdx++
            }

            rowIdx++
        }
    }

    toString() {
        return this._grid.toString()
    }
}
