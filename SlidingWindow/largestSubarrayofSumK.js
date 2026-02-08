/*

    Largest subarray with 0 sum --> (Medium)

    Given an array arr[] containing both positive and negative integers, the task is to find the length of the longest subarray with a sum equals to 0.

    Note: A subarray is a contiguous part of an array, formed by selecting one or more consecutive elements while maintaining their original order.

    Examples:
    Input: arr[] = [15, -2, 2, -8, 1, 7, 10, 23]
    Output: 5
    Explanation: The longest subarray with sum equals to 0 is [-2, 2, -8, 1, 7].


    Input: arr[] = [2, 10, 4]
    Output: 0
    Explanation: There is no subarray with a sum of 0.


    Input: arr[] = [1, 0, -4, 3, 1, 0]
    Output: 5
    Explanation: The longest subarray with sum equals to 0 is [0, -4, 3, 1, 0]

    Input: arr[] = [-31, -48, -90, 54, 20, 95, 6, -86, 22]
    Output: 6
    Explanation: The longest subarray with sum equals to 0 is [-31, -48, -90, 54, 20, 95]  --> From start 
    

    Constraints:
    1 ≤ arr.size() ≤ 106
    −103 ≤ arr[i] ≤ 103

    Expected Complexities:
    Auxiliary Space: O(n)
    Time Complexity: O(n)


*/



function largestSubArrayOfSumK(arr, k) { // O(n * log n)

    let sum = 0
    let res= 0

    for(let i=0; i<arr.length; i++) {
        sum = arr[i]
        for(let j=i+1; j<arr.length; j++) {
            sum += arr[j]
            if(sum == 0) {
                res = Math.max(res, j-i+1)
            }
        }
    }
    return res
    
}


// prefix-sum approach
function largestSubArrayOfSumKII(arr, k) {

    let firstSeen = new Map()
    let prefixSum = 0
    let res = 0

    // insert prefSum 0 at index -1 to handle sum from start
    firstSeen.set(0, -1)

    for(let i=0; i<arr.length; i++) {

        prefixSum += arr[i]

        if(firstSeen.has(prefixSum -k)) {
            const prevIndx = firstSeen.get(prefixSum -k)
            res = Math.max(res, i-prevIndx)
        }
        else {
            firstSeen.set(prefixSum, i)
        }

    }

    console.log(firstSeen)

    return res

}



// work for postive integer array only - sliding window approach
function largestSubArrayWithSumk(arr, k) {

    let maxLen = 0, left = 0, currSum = 0

    for(let right=0; right<arr.length; right++) {

        currSum += arr[right]

        while(currSum > k) {
            currSum -= arr[left++]
        }

        if(currSum == k) {
            maxLen = Math.max(maxLen, right - left + 1)
        }

    }

    return maxLen

}



// let arr = [15, -2, 2, -8, 1, 7, 10, 23]
// arr = [-31, -48, -90, 54, 20, 95, 6, -86, 22] // Output -> 6
// arr = [2, 10, 4]
// arr = [1, 0, -4, 3, 1, 0]
// let k = 17


let arr = [1, 2, 3, 10, 5, 6, 4, 15]
const k = 15

const res = largestSubArrayWithSumk(arr, k)
console.log(res)

