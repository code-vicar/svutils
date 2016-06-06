import assert from 'assert'

import { asc, desc } from '../src/sort/heapSort'

describe('Ascending heapsort', function () {
    it('should sort an array from lowest to highest', function () {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        console.log(asc(array))
        array = [11, 82, 2, 674, 80, 3, 93, 0, 53]
        console.log(asc(array))
        array = [-1, 3, 0, 49, 63, 32, 794, 20, 2]
        console.log(asc(array))
        array = [0, 0, 0, 0, 0, 0, 0]
        console.log(asc(array))
        array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
        console.log(asc(array))
        array = [9, 8, 7, 6, 5, 6, 7, 8, 9]
        console.log(asc(array))
    })
})

describe('Descending heapsort', function () {
    it('should sort an array from highest to lowest', function () {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        console.log(desc(array))
        array = [11, 82, 2, 674, 80, 3, 93, 0, 53]
        console.log(desc(array))
        array = [-1, 3, 0, 49, 63, 32, 794, 20, 2]
        console.log(desc(array))
        array = [0, 0, 0, 0, 0, 0, 0]
        console.log(desc(array))
        array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
        console.log(desc(array))
        array = [9, 8, 7, 6, 5, 6, 7, 8, 9]
        console.log(desc(array))
    })
})
