/*
    Split the array with two equal sum subarrays

    Given an array of integers arr, return true if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays are equal.
    If it is not possible then return false.

    Examples:

    Input: arr = [1, 2, 3, 4, 5, 5]
    Output: true
    Explanation: In the above example, we can divide the array into two subarrays with equal sum. The two subarrays are: [1, 2, 3, 4] and [5, 5]. The sum of both the subarrays are 10. Hence, the answer is true.


    Input: arr = [4, 3, 2, 1]
    Output: false
    Explanation: In the above example, we cannot divide the array into two subarrays with equal sum. Hence, the answer is false.


    Expected Time Complexity: O(n)
    Expected Space Complexity: O(1)

*/


function splitTheArrayWithTwoEquqlSubArray(arr) {

    let totalSum = 0

    for(let i=0; i<arr.length; i++) {
        totalSum += arr[i]
    }

    // odd length arr
    if(totalSum % 2 !== 0) {
        return false
    }

    let halfSum = Math.floor( totalSum / 2 )
    let leftSum = 0

    for(let ele of arr) {
        leftSum += ele

        if(leftSum == halfSum) {
            return true
        }
    }

    return false

}


let arr = [1, 2, 3, 4, 5, 5]
const res = splitTheArrayWithTwoEquqlSubArray(arr)

console.log(res)


