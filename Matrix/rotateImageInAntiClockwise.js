/*

    Given a square matrix mat[][] of size n x n. 
    The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space. 


    Examples:

    Input: mat[][] = [[0, 1, 2], 
                     [3, 4, 5], 
                     [6, 7, 8]] 
    Output: [[2, 5, 8],
            [1, 4, 7],
            [0, 3, 6]]


    Input: mat[][] = [[1, 2],
                     [3, 4]]
    Output: [[2, 4],
            [1, 3]]

*/


function rotateImageAntiClockwise(mat) {

    let n = mat.length, m = mat[0].length

    let res = Array.from({ length: n }, () => new Array(n).fill(0))

    let i = 0, j = m - 1

    while (i < n && j >= 0) {

        for (let k = 0; k < n; k++) {

            res[i][k] = mat[k][j]
        }

        i++, j--

    }

    return res

}







const mat = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8]]

const res = swapDiagonalI(mat)
console.log(res)


