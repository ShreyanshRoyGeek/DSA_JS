/*
    Largest subarray of 0's and 1's --> (Easy)

    Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

    Examples:
    Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
    Output: 6
    Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.

    Input: arr[] = [0, 0, 1, 1, 0]
    Output: 4
    Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.

    Input: arr[] = [0]
    Output: 0
    Explnation: There is no subarray with an equal number of 0s and 1s.

    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)
*/



function getLongestSubarrayWithEqual0sAnd1s(arr) {

    let map = new Map()
    map.set(0, -1)

    let sum = 0, maxLen = 0

    for(let i=0; i<arr.length; i++) {

        let res = arr[i] == 0 ? -1 : 1
        sum += res

        if(map.has(sum)) {
            const indx = map.get(sum)
            maxLen = Math.max(maxLen, i - indx)
        }
        else {
            map.set(sum, i)
        }
        
    }

    return maxLen

}



// let arr = [1, 0, 1, 1, 1, 0, 0]
// let arr = [0, 0, 1, 1, 0]
let arr = [0]
const res = getLongestSubarrayWithEqual0sAnd1s(arr)
console.log(res)


