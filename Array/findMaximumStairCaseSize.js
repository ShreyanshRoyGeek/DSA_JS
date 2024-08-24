/*

    Given N number of square blocks the task is to create a staircase of max height using these blocks. 
    The first stair would require only one block, the second stair would require two blocks and so on.


    Input	|   Output
    10	    |      4
    12	    |      4
    16	    |      5


*/

function findMaximumStairCaseSize(n) {

    let stairCaseHeight = 0
    let count = 1

    while(n >= count) {
        n = n - count
        count++
        stairCaseHeight++
    }


    return stairCaseHeight

}


console.log(findMinximumStairCaseSizeNew(12))


function findMinximumStairCaseSizeNew(n) {

    let count = 0
    let maxHeightStairCase = 0

    while(n >= count) {

        count++
        maxHeightStairCase++
        n = n - count

    }

    return maxHeightStairCase
}


function divideBananas(N, monkey) {

    if(N == 1 || monkey == 0 || N/monkey < 2) {
        return -1 // monkey won't get only one  bananas
    }

    /*else if(N < (monkey * monkey + 1)/2) {
        return -1 // Not consecutive distribution of bananas 
    }*/

    else if(N % monkey !== 0) {
        return -1 // bananas won't not be distributed equally
    }

    const bananasPerMonkey = N / monkey

    if(bananasPerMonkey >= N) {
        return -1 // All bananns won't distributed to one monkeys
    }

    return bananasPerMonkey

}


const bananas = 2
const monkey = 2
const distribution = divideBananas(bananas, monkey)


if(distribution !== -1) {
    console.log(distribution + " Bananas are distributed among " + monkey + " monkeys")
}
else {
    console.log("Bananas won't be distributable!")
}


