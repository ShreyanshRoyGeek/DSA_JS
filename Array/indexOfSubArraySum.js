/*
    Indexes of Subarray Sum  --> (Array) --> Medium

    Given an unsorted array arr of size n that contains only non negative integers, 
    find a sub-array (continuous elements) that has sum equal to s. You mainly need to return the left and right indexes(1-based indexing) of that subarray.

    In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. 
    If no such subarray exists return an array consisting of element -1.

    Examples:

    Input: arr[] = [1,2,3,7,5], n = 5, s = 12
    Output: 2 4
    Explanation: The sum of elements from 2nd to 4th position is 12

    Input: arr[] = [1,2,3,4,5,6,7,8,9,10], n = 10, s = 15,
    Output: 1 5
    Explanation: The sum of elements from 1st to 5th position is 1

    Input: arr[] = [7,2,1], n = 3, s = 2
    Output: 2 2
    Explanation: The sum of elements from 2nd to 2nd position is 2.

*/


function indexOfSubArraySum(arr, k) {

    let sum = 0
    let j =0

    for(let i=0; i<arr.length; i++) {

        sum += arr[i]

        while(sum>k && j<i) {
            sum -= arr[j]
            j++
        }

        if(sum == k) {
            return [i+1, j+1].sort((a, b) => a-b)
        }
    }

    return [-1]

}

let driverArr = [1,2,3,7,5]
let k = 12
// driverArr = [7,2,1]
// k = 2

const res = indexOfSubArraySum(driverArr, k)
console.log('res', res)

