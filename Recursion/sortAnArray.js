/*
    Sort an Array
*/


function isSorted(arr, n) {

    if(n == 0 || n == 1) return true

    if(arr[n-1] < arr[n-2]) return false

    // return arr[n-1] >= arr[n-2] && isSorted(arr, n-1)
    return isSorted(arr, n-1)

}



let arr = [1, 2, 3, 4, 5]
const res = isSorted(arr, arr.length)
console.log(res)



