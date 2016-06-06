//count from height
//(2^k) - 1
//solve for k
//log(k + 1) / log(2)

export function nodeCountFromHeight(height) {
    return Math.pow(2, height) - 1
}

export function heightFromNodeCount(count) {
    return Math.ceil(Math.log(count + 1) / Math.log(2))
}
