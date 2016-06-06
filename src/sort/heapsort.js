import { heapify, siftDown, defaultCompare, TYPE } from '../dataStructure/binaryHeap'
import swapvalues from '../arrayValueSwap'

export function asc(array, compare) {
    // sorted list will be in reverse order of the heap type
    sort(array, TYPE.MAX, compare)
    return array
}

export function desc(array, compare) {
    sort(array, TYPE.MIN, compare)
    return array
}

function sort(array, type, compare) {
    if (!array || array.length <= 1) {
        return
    }
    if (typeof compare !== 'function') {
        compare = defaultCompare
    }

    heapify(array, type, compare)

    let root = 0
    let heapSize = array.length

    while (heapSize > 1) {
        swapvalues(array, root, heapSize - 1)
        heapSize--
        siftDown(array, root, type, compare, heapSize)
    }
}
