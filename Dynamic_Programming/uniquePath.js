/*
    62. Unique Paths --> (Medium)

    There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

    Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

    The test cases are generated so that the answer will be less than or equal to 2 * 109.

    Example 1:
    Input: m = 3, n = 7
    Output: 28


    Example 2:
    Input: m = 3, n = 2
    Output: 3
    Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

*/

// Memoization
var uniquePaths = function(m, n) {
    const dp = []
    // const dp = Array.from({ length : m }, () => new Array(n).fill(-1))
    for (let i = 0; i < m; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(-1)
        }
        dp.push(temp)
    }
    return path(0, 0, m, n, dp)
};


var path = function(row, col, m, n, dp) {
    if(row >= m || col >= n) return 0
    if(row == m-1 && col == n-1) return 1

    if(dp[row][col] !== -1) return dp[row][col]

    let right = path(row, col+1, m, n, dp)
    let down = path(row+1, col, m, n, dp)
    return dp[row][col] = right + down
};


// Tabulation
var uniquePathII = function(m, n) {

    const dp = Array.from({length : m}, () => new Array(n).fill(-1))

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(i == 0 || j == 0) dp[i][j] = 1
            else dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]

}


let m = 3, n = 7
// let m = 3, n = 2
const res = uniquePathII(m, n)
console.log(res);
