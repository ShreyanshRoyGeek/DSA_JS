/*
    Binary Search --> 
*/




function binarySearch(arr, target, start, end) {

    if(start <= end) {

        let mid = Math.floor( start + (end - start)/ 2 )

        if(target == arr[mid]) return mid

        else if(target > arr[mid]) {
            return binarySearch(arr, target, mid+1, end)
        }

        else if(target < arr[mid]) {
            return binarySearch(arr, target, start, mid-1)
        }

    }

    return -1
}


// let arr = [1,2,3,4,5,6,7]
// let tar = 6

let arr = [-1,0,3,5,9,12]
let tar = 9

const res = binarySearch(arr, tar, 0, arr.length - 1)
console.log(res)


