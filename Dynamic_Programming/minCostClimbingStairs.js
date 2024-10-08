/*

    Min Cost Climbing Stairs --> Array, DP --> (Easy)

    You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

    You can either start from the step with index 0, or the step with index 1.

    Return the minimum cost to reach the top of the floor.


    Example 1:

    Input: cost = [10,15,20]
    Output: 15
    Explanation: You will start at index 1.
    - Pay 15 and climb two steps to reach the top.
    The total cost is 15.


    Example 2:

    Input: cost = [1,100,1,1,1,100,1,1,100,1]
    Output: 6
    Explanation: You will start at index 0.
    - Pay 1 and climb two steps to reach index 2.
    - Pay 1 and climb two steps to reach index 4.
    - Pay 1 and climb two steps to reach index 6.
    - Pay 1 and climb one step to reach index 7.
    - Pay 1 and climb two steps to reach index 9.
    - Pay 1 and climb one step to reach the top.
    The total cost is 6.


    Constraints:

    2 <= cost.length <= 1000
    0 <= cost[i] <= 999

*/


function solve(cost, n) {

    //recursion

    //base case
    if(n==0) return cost[0]

    if(n==1) return cost[1]

    const res = cost[n] + Math.min(solve(cost, n-1) , solve(cost, n-2))
    return res

}



function solveI(cost, n, dp) {

    //recursion + memoization -->   Using DP // top-down approach  

    //base case
    if(n==0) return cost[0]

    if(n==1) return cost[1]

    if(dp[n] !== -1) {
        return dp[n]
    }

    dp[n] = cost[n] + Math.min(solve(cost, n-1) , solve(cost, n-2))
    return dp[n] 


    // Time --> O(n)
    // Space --> O(n) + 0(n)

}



function solveII(cost, n, dp) {

    // bottom-up approach  --> Tabulation

    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i=2; i<n; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1] , dp[i-2])
    }


    return Math.min(dp[n-1] , dp[n-2])

    // Time --> O(n)
    // Space --> O(n)

}



function solveIII(cost, n, dp) {

    // bottom-up approach  --> Tabulation + space optimization

    let prev2 = cost[0]
    let prev1 = cost[1]

    for(let i=2; i<n; i++) {
        const res = cost[i] + Math.min(prev1 , prev2)
        prev2 = prev1
        prev1 = res
    }


    return Math.min(prev1 , prev2)

    // Time --> O(n)
    // Space --> O(1)

}



function minCostClimbingStairs(cost) {

    const n = cost.length

    let dp = new Array(n+1).fill(-1)

    const ans = Math.min(solveI(cost, n-1, dp) , solveI(cost, n-2, dp))

    return ans

}



