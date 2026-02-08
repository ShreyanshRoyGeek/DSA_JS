/*

    Longest subarray sum divisible by K --> (Medium)

    Given an arr[] of integers and a positive integer k, find the longest subarray's length with the sum of the elements divisible by k.

    Examples:

    Input: arr[] = [2, 7, 6, 1, 4, 5], k = 3
    Output: 4
    Explanation: The subarray [7, 6, 1, 4] has sum = 18, which is divisible by 3.

    Input: arr[] = [-2, 2, -5, 12, -11, -1, 7], k = 3
    Output: 5
    Explanation: The subarray [2, -5, 12, -11, -1], has sum = -3, which is divisible by 3.

    Input: arr[] = [1, 2, -2], k = 5
    Output: 2
    Explanation: The subarray is [2, -2] with sum = 0, which is divisible by 5.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(min(n, k))


*/



function longestSubarraySumDivisibleByK(arr, k) { // O(n^2) - brute force solution

    let maxLen = 0

    for(let i=0; i<arr.length; i++) {

        let sum = arr[i]

        for(let j=i+1; j<arr.length; j++) {

            sum += arr[j]

            if(sum % k == 0) {
                maxLen = Math.max(maxLen, j-i+1)
            }

        }
    }

    return maxLen
}



function longestSubarraySumDivisibleByKOptimal(arr, k) {

    let map = new Map()
    map.set(0, -1)

    let sum = 0, maxLen = 0

    for(let i=0; i<arr.length; i++) {
        sum += arr[i] 

        let rem = sum % k

        if(rem < 0) {
            rem += k
        }

        if(map.has(rem)) {
            const indx = map.get(rem)
            maxLen = Math.max(maxLen, i - indx)
        }

        else {
            map.set(rem, i)
        }

    }

    return maxLen

}


let arr = [2, 7, 6, 1, 4, 5]
let k = 3

// let arr = [-2, 2, -5, 12, -11, -1, 7]
// let k = 3

// let arr = [1, 2, -2]
// let k = 2


// let arr = [1, 2, -6]
// let k = 3


/*

// let arr = [4, 5, 0, -2, -3, 1]
// let k = 5

// let arr = [2, 2, 2, 2, 2, 2]
// let k = 2

*/

const res = longestSubarraySumDivisibleByKOptimal(arr, k)
console.log(res)

