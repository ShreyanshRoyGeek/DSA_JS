/*

    Zero Sum Subarrays --> (Medium)

    You are given an array arr[] of integers. Find the total count of subarrays with their sum equal to 0.

    Examples:

    Input: arr[] = [0, 0, 5, 5, 0, 0]
    Output: 6
    Explanation: The 6 subarrays are [0], [0], [0], [0], [0,0], and [0,0].


    Input: arr[] = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7]
    Output: 4
    Explanation: The 4 subarrays are [-1, -3, 4], [-2, 2], [2, 4, 6, -12], 
    and [-1, -3, 4, -2, 2]


    Input: arr[] = [0]
    Output: 1
    Explanation: The only subarray is [0].


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)

*/



function findSubArray(arr) {

    let map = new Map()
    map.set(0, 1)

    let sum = 0, count = 0
    for(let val of arr) {

        sum += val
        if(map.has(sum)) {
            const freq = map.get(sum)
            count += freq
            map.set(sum, freq+1)
        }
        else {
            map.set(sum, 1)
        }
    }

    return count

}


function subArrayWithZeroSum(arr) {

    let prefixSum = new Map()
    prefixSum.set(0, 1)
    let res = 0, currSum = 0

    for(let val of arr) {

        currSum += val

        if(prefixSum.has(currSum)) {

            res += prefixSum.get(currSum) 

        }

        prefixSum.set(currSum, ( prefixSum.get(currSum) || 0 ) + 1)

    }

    return res

}


let arr = [0, 0, 5, 5, 0, 0]
// let arr = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7]
// let arr = [0]
// let arr = [1, 2, -1]
const res = subArrayWithZeroSum(arr)
console.log(res)

