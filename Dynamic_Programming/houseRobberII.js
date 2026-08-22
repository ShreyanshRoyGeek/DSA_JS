/*
    House Robber II --> (Medium)

    You are a professional robber planning to rob houses along a street. 
    Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
    That means the first house is the neighbor of the last one. 
    Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


    Example 1:
    Input: nums = [2,3,2]
    Output: 3
    Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.


    Example 2:
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.


    Example 3:
    Input: nums = [1,2,3]
    Output: 3


    Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000
 
*/



// Memoization - top down dp
var rob = function(nums) {

    if(nums.length === 1) return nums[0]

    const dp1 = new Array(nums.length).fill(-1)
    const dp2 = new Array(nums.length).fill(-1)

    const rob1 = amount(nums.slice(0, nums.length - 1), 0, dp1) 

    const rob2 = amount(nums.slice(1), 0, dp2)

    return Math.max(rob1, rob2)

}


function amount(nums, i, dp) {
    if(i >= nums.length) return 0       

    if(dp[i] !== -1) return dp[i]

    const take = nums[i] + amount(nums, i+2, dp)
    const notTake = amount(nums, i+1, dp)       

    return dp[i] = Math.max(take, notTake)
}



// bottom - up approach
function robI(nums) {

    if(nums.length === 1) return nums[0]

    const rob1 = robHelper(nums.slice(0, nums.length - 1))
    const rob2 = robHelper(nums.slice(1))

    return Math.max(rob1, rob2)

};



function robHelper(nums) {

    const n = nums.length   

    const dp = new Array(n).fill(-1)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])  

    for(let i=2; i<n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }

    return dp[n-1]

};


