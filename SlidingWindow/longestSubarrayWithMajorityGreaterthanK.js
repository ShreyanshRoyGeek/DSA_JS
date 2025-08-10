/*

    Longest Subarray with Majority Greater than K --> Array 

    Given an array arr[] and an integer k, the task is to find the length of longest subarray in which the count of elements greater than k is more than the count of elements less than or equal to k.


    Examples:
    Input: arr[] = [1, 2, 3, 4, 1], k = 2
    Output: 3
    Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of length 4 or 5 which will hold the given condition, so the answer is 3.


    Input: arr[] = [6, 5, 3, 4], k = 2
    Output: 4
    Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest subarray.


    Expected Complexities:
    Time Complexity: O(n)
    Auxiliary Space: O(n)

    Hint: 

*/


function longestSubArray(arr, k) {

    let ans = 0, n = arr.length
    
    for(let i=0; i<n; i++) {
        let count = 0
        for(let j=i; j<n; j++) {
            if(arr[j] > k) {
                count++
            }
            else {
                count--
            }
            if(count > 0) {
                ans = Math.max(ans, j-i+1)
            }
        }
    }

    return ans
}


const arr = [1, 2, 3, 4, 1]
const k = 2

const res = longestSubArray(arr, k)
console.log(res)

