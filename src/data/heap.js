import _ from 'lodash'

export function settle(array, parentIndex, type, compare) {
    let heapLength = array.length
    let leftChildIndex = (2 * parentIndex) + 1
    let rightChildIndex = (2 * parentIndex) + 2

    let _compare = function lessThan(a, b) {
        return compare(a, b) < 0
    }
    if (type === TYPE.MAX) {
        _compare = function greaterThan(a, b) {
            return compare(a, b) > 0
        }
    }

    let minMaxChildIndex = -1
    if (leftChildIndex < heapLength && rightChildIndex < heapLength && _compare(array[rightChildIndex], array[leftChildIndex])) {
        minMaxChildIndex = rightChildIndex
    } else if (leftChildIndex < heapLength) {
        minMaxChildIndex = leftChildIndex
    }

    if (minMaxChildIndex === -1) {
        return
    }

    if (_compare(array[minMaxChildIndex], array[parentIndex])) {
        swapvalues(array, parentIndex, minMaxChildIndex)
        parentIndex = minMaxChildIndex
        settle(array, parentIndex, type, compare)
    }
}

function swapvalues(array, i, j) {
    let valI = array[i]
    array[i] = array[j]
    array[j] = valI
}

function defaultCompare(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    }
    return 0
}

export const TYPE = {
    MIN: 'MIN',
    MAX: 'MAX'
}

export default class Heap {
    constructor(options) {
        let heapType = _.get(options, 'type')
        let compare = _.get(options, 'compare')

        this.heapType = (heapType) ? heapType : TYPE.MIN
        this.compare = (compare) ? compare : defaultCompare

        this._heap = []
    }

    pop() {
        if (this._heap.length === 0) {
            return null
        }

        if (this._heap.length === 1) {
            return this._heap.pop()
        }

        let root = this._heap[0]
        let last = this._heap.pop()
        this._heap[0] = last
        settle(this._heap, 0, this.heapType, this.compare)

        return root
    }

    push(item) {
        this._heap.unshift(item)
        if (this._heap.length > 1) {
            settle(this._heap, 0, this.heapType, this.compare)
        }
    }
}
