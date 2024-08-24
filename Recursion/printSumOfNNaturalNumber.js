
function printSumOfNNaturalNumber(n) {  // O(n) - time & O(n) - space

    if(n==1) {
        return 1
    }
    return n + printSumOfNNaturalNumber(n-1)

}


console.log(printSumOfNNaturalNumber(5))