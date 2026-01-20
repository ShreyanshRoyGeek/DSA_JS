/*

    51. N-Queens Problem --> Recursion and Backtracking --> (Hard) 

    The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

    Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

    Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


    Example 1:
    Input: n = 4
    Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
    Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
  
    
    Example 2:
    Input: n = 1
    Output: [["Q"]]


*/


function isSafe(mat, row, col) {

    let n = mat.length

    // row check
    for (let i = 0; i < n; i++) {
        if ((mat[row][i]) == 'Q') return false;
    }

    // column check
    for (let i = 0; i < n; i++) {
        if ((mat[i][col]) == 'Q') return false;
    }

    // left upper diagonal check
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (mat[i][j] == 'Q') return false;
    }

    // right upper diagonal check
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (mat[i][j] == 'Q') return false;
    }

    return true

}


function placeQueens(row, mat, res) {


    let n = mat.length

    // base case
    if (row == n) {

        let ans = []
        for (let i = 0; i < n; i++) {

            let str = ''
            for (let j = 0; j < n; j++) {
                str += mat[i][j]
            }

            ans.push(str)
        }

        res.push(ans)

        // res.push(mat)
        return

    }

    for (let j = 0; j < n; j++) {

        if (isSafe(mat, row, j)) {
            mat[row][j] = 'Q'
            placeQueens(row + 1, mat, res)
            mat[row][j] = '.'
        }

    }


}



function nQueens(n) { // TC -> 0(n!)

    let mat = Array.from({ length: n }, () => Array(n).fill('.'))
    let res = []

    placeQueens(0, mat, res)

    return res

}




let n = 4
const res = nQueens(n)
console.log(res)


