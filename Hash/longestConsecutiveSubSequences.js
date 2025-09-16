/*

    Longest Consecutive Subsequence -> (Medium)

    Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

    Examples:

    Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
    Output: 6
    Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.


    Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
    Output: 4
    Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.


    Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
    Output: 7
    Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.


    Expected Complexities
    Time Complexity: O(n)
    Auxiliary Space: O(n)


*/


function getLongestConsecutiveSubSequences(arr) { // O(n * logn) time ans O(1) space

    arr = arr.sort((a,b) => a-b)

    let cnt = 1, res = 1

    for(let i=1; i<arr.length; i++) {

        if(arr[i] == arr[i-1]) continue

        if(arr[i] == arr[i-1] + 1) {
            cnt++
        }
        else {
            cnt = 1
        }

        res = Math.max(res, cnt)
    }

    return res

}


// let arr = [2, 2, 6, 1, 9, 4, 5, 3]
// let arr = [1, 9, 3, 10, 4, 20, 2]
let arr = [15, 13, 12, 14, 11, 10, 9]
const res = getLongestConsecutiveSubSequences(arr)
console.log(res)

