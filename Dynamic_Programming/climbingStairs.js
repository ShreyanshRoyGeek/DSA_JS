/*
    70. Climbing Stairs --> (Easy)

    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


    Example 1:
    Input: n = 2

    Output: 2

    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    
    Example 2:
    Input: n = 3

    Output: 3

    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step


    constraints:    
    1 <= n <= 45

*/


var climbStairs = function(n) {

    const memo = new Array(n+1).fill(-1)
    
    function solveRecursive(steps) {
        if(steps <= 1) return 1

        if(memo[steps] !== -1) return memo[steps]

        return memo[steps] = solveRecursive(steps - 1) + solveRecursive(steps - 2) 
    }

    return solveRecursive(n)
}



function climbStairsI(n) {

    let dp = new Array(n+1).fill(-1)

    dp[0] = 1, dp[1] = 1

    for(let i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}


const n = 5
console.log(climbStairs(n))
console.log(climbStairsI(n))

