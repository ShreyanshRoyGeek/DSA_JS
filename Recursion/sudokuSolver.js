/*
    37. Sudoku solver --> (Hard)

    Write a program to solve a Sudoku puzzle by filling the empty cells.

    A sudoku solution must satisfy all of the following rules:

    Each of the digits 1-9 must occur exactly once in each row.
    Each of the digits 1-9 must occur exactly once in each column.
    Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
    The '.' character indicates empty cells.



    Example 1:

    Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
    Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
    Explanation: The input board is shown above and the only valid solution is shown below:



*/



function sedokuSolver(board) {

    let res = []
    placeDigit(0, board, res)

    return res

}


function placeDigit(row, board, res) {

    // console.log('called')

    let n = board.length

    // base case
    if(row == n) {

        let ans = []
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                ans.push(board[i][j])
            }
        }

        res.push(ans)

        return 
    }

    // console.log('called1')


    for(let j=0; j<n; j++) {

        // console.log('called2')

        if(board[row][j] == '.') {

            // console.log('occur')

            for(let k=1; k<=9; k++) {

                if(isSafe(board, row, j, k)) {
                    board[row][j] = k
                    placeDigit(row+1, board, res)
                    board[row][j] = '.'
                    break
                }
            }

        }

    }

}


function isSafe(board, row, col, num) {

    
    let n = board.length
    let i = 0, j = 0
    
    // check row
    for(j=0; j<n; j++) {
        if(board[row][j] == num) return false
    }

    // check col
    for(i=0; i<n; i++) {
        if(board[i][col] == num) return false
    }

    // 1ST - common grid check
    if(row < 3  && col < 3) {

        for(i=0; i<row; i++) {
            for(j=0; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }

    }

    else if(row < 3 && col < 6) {

        for(i=0; i<row; i++) {
            for(j=4; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }

    else if(row < 3 && col < 9) {

        for(i=0; i<row; i++) {
            for(j=7; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }




    // 2ND 
    else if(row < 6  && col < 3) {

        for(i=4; i<row; i++) {
            for(j=0; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }

    }

    else if(row < 6 && col < 6) {

        for(i=4; i<row; i++) {
            for(j=4; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }

    else if(row < 6 && col < 9) {

        for(i=4; i<row; i++) {
            for(j=7; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }


    // 3RD
    else if(row < 9  && col < 3) {

        for(i=7; i<row; i++) {
            for(j=0; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }

    }

    else if(row < 9 && col < 6) {

        for(i=7; i<row; i++) {
            for(j=4; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }

    else if(row < 9 && col < 9) {

        for(i=7; i<row; i++) {
            for(j=7; j<col; j++) {
                if(board[i][j] == num) return false
            }
        }
    }

    return true

}


let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
const res = sedokuSolver(board)
console.log(res)


