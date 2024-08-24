
function largestElemntInArray(arr) {

    // let max = arr[0]
    // let max = -Infinity

    let max = Number.NEGATIVE_INFINITY

    for(let i=0; i<arr.length; i++) {

        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max

}


function smallestElemntInArray(arr) {

    let min = Number.POSITIVE_INFINITY

    for(let i=0; i<arr.length; i++) {

        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min

}


const maxElem = largestElemntInArray([1, 4, 10, 6, 8])

const minElem = smallestElemntInArray([1, -4, 10, 6, 8])

console.log("The largest element of given array is ", maxElem)

console.log("The smallest element of given array is ", minElem)