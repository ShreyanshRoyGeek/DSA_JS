/*

    Kadane's Algorithm --> Array (Medium)

    Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
    which has the maximum sum and return its sum.

    Input:
    N = 5
    Arr[] = {1,2,3,-2,5}
    Output:
    9
    Explanation:
    Max subarray sum is 9
    of elements (1, 2, 3, -2, 5) which 
    is a contiguous subarray.

    Input:
    N = 4
    Arr[] = {-1,-2,-3,-4}
    Output:
    -1
    Explanation:
    Max subarray sum is -1 
    of element (-1)


*/


function kadensAlgorithm(arr) {

    let max = arr[0]
    let sum = 0

    for(let i=0; i<arr.length; i++) {

        sum += arr[i]
        max = Math.max(sum, max)

        if(sum < 0) {
            sum = 0
        }
    }

    return max
}


let driverArr = [1,2,3,-2,5]
// driverArr = [-1,-2,-3,-4]
const res = kadensAlgorithm(driverArr)

console.log(res)


