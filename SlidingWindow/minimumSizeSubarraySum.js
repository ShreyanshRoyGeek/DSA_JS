/*

    Minimum size subarray sum --> Leetcode -> (Medium)

    Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

    Example 1:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.
    
    Example 2:
    Input: target = 4, nums = [1,4,4]
    Output: 1
    
    Example 3:
    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0


*/


function getMinSizeSubarraySum(arr, k) {

    let fistSeen = new Map()
    let prefSum = 0, res = Infinity

    fistSeen.set(0, -1)

    for(let i=0; i<arr.length; i++) {
        prefSum += arr[i]

        if(fistSeen.has(prefSum-k)) {
            const prevIndx = fistSeen.get(prefSum-k)
            res = Math.min(res, i-prevIndx)
        }
        else {
            fistSeen.set(prefSum, i)
        }
    }

    console.log(fistSeen)

    return res == Infinity ? 0 : res
}



let arr = [2,3,1,2,4,3]
// arr = [1,4,4]
arr = [1,2,3,4,5]
let k = 7
// k = 9
k = 11
const res = getMinSizeSubarraySum(arr, k)
console.log(res)
