/*
    Longest Increasing Subsequence (LIS) is a classic dynamic programming problem that involves finding the length of the longest subsequence in a given sequence of numbers such that all elements of the subsequence are sorted in increasing order. 
    A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

    For example, consider the sequence [10, 9, 2, 5, 3, 7, 101, 18]. 
    The longest increasing subsequence in this case is [2, 3, 7, 101], which has a length of 4.


    Example 1:
    Input: nums = [10,9,2,5,3,7,101,18]
    Output: 4
    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


    Example 2:
    Input: nums = [0,1,0,3,2,3]
    Output: 4


    Example 3:
    Input: nums = [7,7,7,7,7,7,7]
    Output: 1

    Constraints:
    1 <= nums.length <= 2500
    -104 <= nums[i] <= 104


    Complexity:
    - Time: O(n^2) where n is the length of the input array. We use two nested loops to compare each element with all previous elements.
    - Space: O(n) for the dp array that stores the length of the longest increasing subsequence ending at each index.


*/


function lengthOfLIS(nums) {

    const dp = new Array(nums.length).fill(1); // Initialize dp array with 1s

    for (let i = 1; i < nums.length; i++) { 
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp); // The length of the longest increasing subsequence is the maximum value in dp

}

