import _ from 'lodash'
import { Graph } from 'graphlib'

export default class Grid {
    constructor(size) {
        if (_.isInteger(size) && size >= 0) {
            this.size = size
        } else {
            this.size = 10
        }


    }
}
