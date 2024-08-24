
function printNthFibonacciNumbers(n) {

    let first = 0 , second = 1

    console.log(first)
    console.log(second)

    while((n-2) !== 0) {

        let sum = first + second

        first = second
        second = sum

        console.log(sum)

        n--

    }

}


// printNthFibonacciNumbers(10)


function nthFibonacciNumbersSum(n) {

    if(n == 0){
        return 0
    }
    if(n == 1) {
        return 1
    }

    let sum = nthFibonacciNumbersSum(n-1) + nthFibonacciNumbersSum(n-2)

    return sum
}


console.log(nthFibonacciNumbersSum(10))


