/*
    64. Minimum Path Sum -->(Medium)

    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
    Note: You can only move either down or right at any point in time.

    Example 1: 
    Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    Output: 7
    Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

    Example 2:
    Input: grid = [[1,2,3],[4,5,6]]
    Output: 12


*/


// Tabulation
function minPathSum(grid) {

    const m = grid.length, n = grid[0].length
    const dp = Array.from({ length : m }, () => new Array(n).fill(0))

    dp[0][0] = grid[0][0]

    // row 
    for(let i=1; i<n; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i]
    }

    // column 
    for(let i=1; i<m; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }

    
    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }

    return dp[m-1][n-1]

}




function minPathSumI(grid) {

    let m = grid.length, n = grid[0].length

    for(let i=0; i<m; i++) {

        for(let j=0; j<n; j++) {

            if(i == 0 && j == 0) continue
            else if(i == 0) grid[i][j] = grid[i][j] + grid[i][j-1]
            else if(j == 0) grid[i][j] = grid[i][j] + grid[i-1][j]

            else grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1])
        }

    }

    return grid[m-1][n-1]

}



// let grid = [[1,3,1],[1,5,1],[4,2,1]]

let grid = [[1,2,3],[4,5,6]]

const res = minPathSumI(grid)
console.log(res);
