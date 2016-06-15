import assert from 'assert'

import { heightFromNodeCount, nodeCountFromHeight } from '../src/binaryTreeHeight'

describe('Height from node count', function() {
    it('should calculate height of binary tree from node count', function() {
        assert(heightFromNodeCount(4) === 3, '4 nodes require a height of 3')
        assert(heightFromNodeCount(8) === 4, '8 nodes require a height of 4')
        assert(heightFromNodeCount(11) === 4, '11 nodes require a height of 4')
        assert(heightFromNodeCount(16) === 5, '16 nodes require a height of 5')
    })
})

describe('Node count from height', function() {
    it('should calculate node count of full binary tree with given height', function() {
        assert(nodeCountFromHeight(2) === 3, 'height of 2 will have 3 nodes')
        assert(nodeCountFromHeight(4) === 15, 'height of 4 will have 15 nodes')
        assert(nodeCountFromHeight(5) === 31, 'height of 5 will have 31 nodes')
    })
})
