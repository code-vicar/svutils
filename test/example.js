import _ from 'lodash'
import BinaryHeap, { TYPE } from '../src/data/heap'

let heap = new BinaryHeap({
    // type: TYPE.MIN
    type: TYPE.MAX
})

let n = 20;
for (let i = 0; i < n; i++) {
    let r = _.random(0, 50)
    heap.push(r)
    console.log(r)
    printHeap(heap)
}

function printHeap(heap) {
    let level = 1
    let levelCounter = 1
    let linesCounter = 1
    let q = [0]
    let lines = [heap._heap[0]]

    while (q.length > 0) {
        let node = q.shift()

        let left = 2*node + 1
        let right = 2*node + 2
        let leftVal = null, rightVal = null

        if (left < heap._heap.length) {
            leftVal = heap._heap[left]
            q.push(left)
        }
        if (right < heap._heap.length) {
            rightVal = heap._heap[right]
            q.push(right)
        }

        lines[linesCounter] = lines[linesCounter] || ''
        if (leftVal === null && rightVal === null) {
            lines[linesCounter] = `${lines[linesCounter]}      `
        } else {
            lines[linesCounter] = `${lines[linesCounter]}[${leftVal}, ${rightVal}]`
        }


        levelCounter--
        if (levelCounter === 0) {
            linesCounter++
            level = level * 2
            levelCounter = level
        }
    }

    let lineNum = lines.length - 1
    for(let line of lines) {
        console.log(`${addSpace(lineNum*2)}${line}`)
        console.log('')
        lineNum--
    }
}

function addSpace(n) {
    let spaces = ''

    for(let i = 0; i < n; i++) {
        spaces = spaces + '  '
    }
    return spaces
}

let next = null
let sorted = []
do {
    next = heap.pop()
    if (heap._heap.length > 0) {
        printHeap(heap)
    }
    if (next !== null) {
        sorted.push(next)
    }
} while (next !== null)

console.log(sorted)
