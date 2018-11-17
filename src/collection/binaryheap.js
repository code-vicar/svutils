import isInteger from 'lodash.isinteger'
import swapvalues from '../arrayValueSwap'

export const TYPE = {
    MIN: 'MIN',
    MAX: 'MAX'
}

export default class BinaryHeap {
    constructor(options = {}) {
        const {
            type: heapType,
            compare
        } = options

        this.heapType = (heapType) ? heapType : TYPE.MIN
        this.compare = (compare) ? compare : defaultCompare

        this._heap = []

        this.heapify = () => {
            heapify(this._heap, this.heapType, this.compare)
        }
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

    peek() {
        return this._heap[0]
    }

    static get TYPE() {
        return TYPE
    }

    static fromArray(array, options) {
        let heap = new Heap(options)
        heap.heapify(array)
        return heap
    }
}

export function heapify(array, type, compare) {
    if (!array || array.length <= 1) {
        return array
    }

    // middle of the array is the first non leaf node
    // from here we work backwards up the tree heapifying
    // each parent node as we go
    let i = Math.floor(array.length / 2)
    while (i >= 0) {
        siftDown(array, i, type, compare)
        i--
    }
}

export function siftDown(array, index, type, compare, heapSize) {
    if (!isInteger(heapSize)) {
        heapSize = array.length
    }
    let leftChildIndex = (2 * index) + 1
    let rightChildIndex = (2 * index) + 2

    let _compare = getCompare(type, compare)

    let minMaxChildIndex = -1
    if (leftChildIndex < heapSize && rightChildIndex < heapSize && _compare(array[rightChildIndex], array[leftChildIndex])) {
        minMaxChildIndex = rightChildIndex
    } else if (leftChildIndex < heapSize) {
        minMaxChildIndex = leftChildIndex
    }

    if (minMaxChildIndex === -1) {
        return
    }

    if (_compare(array[minMaxChildIndex], array[index])) {
        swapvalues(array, minMaxChildIndex, index)
        siftDown(array, minMaxChildIndex, type, compare, heapSize)
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

export function defaultCompare(a, b) {
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
