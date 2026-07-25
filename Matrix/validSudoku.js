/*
    Valid Sudoku --> (Medium)

    Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:        
    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.    

    Note:
    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.    

    Example 1:
    Input: board = 
        [["5","3",".",".","7",".",".",".","."], 
        ["6",".",".","1","9","5",".",".","."],  
        [".","9","8",".",".",".",".","6","."], 
        ["8",".",".",".","6",".",".",".","3"],  
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"], 
        [".","6",".",".",".",".","2","8","."],  
        [".",".",".","4","1","9",".",".","5"],  
        [".",".",".",".","8",".",".","7","9"]]  

    Output: true


    Example 2:      
    Input: board = 
        [["8","3",".",".","7",".",".",".","."], 
        ["6",".",".","1","9","5",".",".","."],      
        [".","9","8",".",".",".",".","6","."], 
        ["8",".",".",".","6",".",".",".","3"],  
        ["4",".",".","8",".","3",".",".","1"],  
        ["7",".",".",".","2",".",".",".","6"], 
        [".","6",".",".",".",".","2","8","."],  
        [".",".",".","4","1","9",".",".","5"],  
        [".",".",".",".","8",".",".","7","9"]] 

    Output: false

*/


function isValidSudoku(board) {  // O(1) time and O(1) space
    let rows = {}
    let cols = {}
    let boxes = {}

    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {

            let currentVal = board[i][j]

            if (currentVal !== ".") {

                if (rows[i] === undefined) {
                    rows[i] = new Set()
                }

                if (cols[j] === undefined) {
                    cols[j] = new Set()
                }

                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (boxes[boxIndex] === undefined) {
                    boxes[boxIndex] = new Set()
                }


                if (rows[i].has(currentVal) || cols[j].has(currentVal) || boxes[boxIndex].has(currentVal)) {
                    return false
                }
                else {
                    rows[i].add(currentVal)
                    cols[j].add(currentVal)
                    boxes[boxIndex].add(currentVal)
                }
            }
        }
    }
    return true
}





