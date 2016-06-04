import _ from 'lodash'

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
        siftDown(this._heap, 0, this.heapType, this.compare)

        return root
    }

    push(item) {
        this._heap.push(item)

        siftUp(this._heap, this._heap.length - 1, this.heapType, this.compare)
    }
}

export function siftDown(array, index, type, compare) {
    let heapLength = array.length
    let leftChildIndex = (2 * index) + 1
    let rightChildIndex = (2 * index) + 2

    let _compare = getCompare(type, compare)

    let minMaxChildIndex = -1
    if (leftChildIndex < heapLength && rightChildIndex < heapLength && _compare(array[rightChildIndex], array[leftChildIndex])) {
        minMaxChildIndex = rightChildIndex
    } else if (leftChildIndex < heapLength) {
        minMaxChildIndex = leftChildIndex
    }

    if (minMaxChildIndex === -1) {
        return
    }

    if (_compare(array[minMaxChildIndex], array[index])) {
        swapvalues(array, minMaxChildIndex, index)
        siftDown(array, minMaxChildIndex, type, compare)
    }
}

export function siftUp(array, index, type, compare) {
    if (index === 0) {
        return
    }
    let parentIndex = Math.floor((index - 1) / 2)

    let _compare = getCompare(type, compare)

    if (_compare(array[index], array[parentIndex])) {
        swapvalues(array, parentIndex, index)
        siftUp(array, parentIndex, type, compare)
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

function getCompare(type, compare) {
    if (type === TYPE.MAX) {
        return function greaterThan(a, b) {
            return compare(a, b) > 0
        }
    }

    return function lessThan(a, b) {
        return compare(a, b) < 0
    }
}

export const TYPE = {
    MIN: 'MIN',
    MAX: 'MAX'
}
