/*
    525. Contiguous Array --> (Medium)

    Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

    Example 1:
    Input: nums = [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

    Example 2:
    Input: nums = [0,1,0]
    Output: 2
    Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

    Example 3:
    Input: nums = [0,1,1,1,1,1,0,0,0]
    Output: 6
    Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.

*/



function findMaxLength(nums) {

    for(let i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            nums[i] = -1
        }
    }

    let prefSum = new Map()
    let totalSum = 0, maxLen = 0

    prefSum.set(0, -1)

    for(let i=0; i<nums.length; i++) {

        totalSum += nums[i]

        if(prefSum.has(totalSum)) {
            const prevIndx = prefSum.get(totalSum) 
            maxLen = Math.max(maxLen, i - prevIndx)
        }

        else {
            prefSum.set(totalSum, i)
        }

    }

    return maxLen

}


// let arr = [0,1,0]

let arr = [0,1,1,1,1,1,0,0,0]

const res = findMaxLength(arr)
console.log(res)

