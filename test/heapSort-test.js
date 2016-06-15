import _ from 'lodash'
import assert from 'assert'

import { asc, desc } from '../src/sort/heapSort'

describe('Ascending heapsort', function () {
    it('should sort an array from lowest to highest', function () {
        assert(_.isEqual(asc([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]))
        assert(_.isEqual(asc([11, 82, 2, 674, 80, 3, 93, 0, 53]), [0, 2, 3, 11, 53, 80, 82, 93, 674]))
        assert(_.isEqual(asc([-1, 3, 0, 49, 63, 32, 794, 20, 2]), [-1, 0, 2, 3, 20, 32, 49, 63, 794]))
        assert(_.isEqual(asc([0, 0, 0, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 0, 0]))
        assert(_.isEqual(asc([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]))
        assert(_.isEqual(asc([9, 8, 7, 6, 5, 6, 7, 8, 9]), [5, 6, 6, 7, 7, 8, 8, 9, 9]))
    })
})

describe('Descending heapsort', function () {
    it('should sort an array from highest to lowest', function () {
        assert(_.isEqual(desc([1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 4, 3, 2, 1]))
        assert(_.isEqual(desc([11, 82, 2, 674, 80, 3, 93, 0, 53]), [674, 93, 82, 80, 53, 11, 3, 2, 0]))
        assert(_.isEqual(desc([-1, 3, 0, 49, 63, 32, 794, 20, 2]), [794, 63, 49, 32, 20, 3, 2, 0, -1]))
        assert(_.isEqual(desc([0, 0, 0, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 0, 0]))
        assert(_.isEqual(desc([9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 8, 7, 6, 5, 4, 3, 2, 1]))
        assert(_.isEqual(desc([9, 8, 7, 6, 5, 6, 7, 8, 9]), [9, 9, 8, 8, 7, 7, 6, 6, 5]))
    })
})
