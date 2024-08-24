
function printFactorialOfNumberN(n) {  // O(n) - space & O(n) - time

    if(n == 0) {
        return 1
    }
    return n * printFactorialOfNumberN(n-1)
}

console.log(printFactorialOfNumberN(5))

