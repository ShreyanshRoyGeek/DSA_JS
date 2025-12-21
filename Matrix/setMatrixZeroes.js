/*

    73. Set matrix Zeroes --> (Medium) --> Leetcode

    Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

    Example 1:
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]


    Example 2:
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/


function setmatrixZeroes(mat) {


    let zeros = []

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[0].length; j++) {

            if (mat[i][j] == 0) {
                zeros.push([i, j])
            }

        }
    }

    for (ele of zeros) {

        for (let i = 0; i < mat.length; i++) {

            for (let j = 0; j < mat[0].length; j++) {

                if(i == ele[0] || j == ele[1]) {

                    mat[i][j] = 0
                }

            }
        }
    }


    return mat

}


function setMatrixZeroes(mat) { // O(n*m) time and O(n + m) space

    let n = mat.length, m = mat[0].length

    // using extra space - O(n) + O(m)
    let row = new Array(n), col = new Array(m)

    for(let i=0; i<n; i++) {

        for(let j=0; j<m; j++) {

            if(mat[i][j] == 0) {
                row[i] = true
                col[j] = true
            }

        }
    }

    for(let i=0; i<n; i++) {

        for(let j=0; j<m; j++) {

            if(row[i] || col[j]) {
                mat[i][j] = 0
            }

        }

    }

    return mat

}


function setMatrixZeroesI(mat) { // O(n*m) time and O(1) space --> Optimized

    let n = mat.length, m = mat[0].length

    let c = 1

    // Traverse the array and mark 
    // first cell of each row and column
    for(let i=0; i<n; i++) {

        for(let j=0; j<m; j++) {

            if(mat[i][j] == 0) {

                // mark i-th row
                mat[i][0] = 0

                // mark j-th column
                if(j == 0) c = 0
                else mat[0][j] = 0
            }
            
        }
    }

    // Traverse in the inner matrix - (1,1) to (n-1, m-1)
    for(let i=1; i<n; i++) {

        for(let j=1; j<m; j++) {

            if(mat[0][j] == 0 || mat[i][0] == 0) {
                mat[i][j] = 0
            }

        }
    }

    // Mark the first row
    if(mat[0][0] == 0) {

        for(let j=0; j<m; j++) {
            mat[0][j] = 0
        }
    }

    // Mark the first column
    if(c == 0) {
        for(let i=0; i<n; i++) {
            mat[i][0] = 0
        }
    }

    return mat
}




// let mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// let mat = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
let mat = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]
const res = setMatrixZeroes(mat)

console.log(res)


