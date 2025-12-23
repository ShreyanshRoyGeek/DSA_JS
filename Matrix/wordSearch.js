/*

    Word Search --> (Medium)

    Given an m x n grid of characters board and a string word, return true if word exists in the grid.
    The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

    Example 1.
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    Output: true

    Example 2.
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
    Output: true

    Example 3.
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
    Output: false   

*/


function wordSearch(mat, word) {

    const wLen = word.length

    const n = mat.length
    const m = mat[0].length

    if(wLen > n*m) return false

    for(let i=0; i<n; i++) {

        for(let j=0; j<m; j++) {

            // if first word matches, then recur and check
            if(mat[i][j] == word[0]){
                if(findMatch(mat, word, i, j, 0)) return true
            }
        }
    }

    return false


    function findMatch(mat, word, x, y, wIdx) {

        if(wIdx == word.length) return true

        // out of boundary
        if(x<0 || y<0 || x>=n || y>=m) return false

        if(mat[x][y] == word[wIdx]) {

            // marking this cell as visited
            const temp = mat[x][y]
            mat[x][y] = '#'

            // finding subpattern in 4 directions
            const right = findMatch(mat, word, x, y+1, wIdx+1)
            const left = findMatch(mat, word, x, y-1, wIdx+1)
            const down = findMatch(mat, word, x+1, y, wIdx+1)
            const up = findMatch(mat, word, x-1, y, wIdx+1)

            mat[x][y] = temp

            return right || left || down || up
        }

        return false

    }

}



// const mat = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "ABCCED"

// const mat = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "SEE"

// const mat = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// const word = "ABCB"

const mat = [["A", "B", "C", "D"], ["P", "Q", "R", "S"], ["U", "V", "W", "X"]]
const word = "QRWX"

const res = wordSearch(mat, word)
console.log(res)

