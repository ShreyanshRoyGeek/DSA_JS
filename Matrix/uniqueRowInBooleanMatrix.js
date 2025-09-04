/*

    Unique rows in boolean matrix --> (Easy)

    Given a binary matrix your task is to find all unique rows of the given matrix in the order of their appearance in the matrix.

    Example 1:

    Input:
    row = 3, col = 4 
    M[][] = {{1 1 0 1},{1 0 0 1},{1 1 0 1}}
    Output: $1 1 0 1 $1 0 0 1 $
    Explanation: Above the matrix of size 3x4
    looks like
    1 1 0 1
    1 0 0 1
    1 1 0 1
    The two unique rows are R1: {1 1 0 1} and R2: {1 0 0 1}. 
    As R1 first appeared at row-0 and R2 appeared at row-1, in the resulting list, R1 is kept before R2.


    Example 2:

    Input:
    row = 2, col = 4 
    M[][] = {{0 0 0 1}, {0 0 0 1}}
    Output: $0 0 0 1 $
    Explanation: Above the matrix of size 2x4
    looks like
    0 0 0 1
    0 0 0 1
    Only unique row is $0 0 0 1 $


    Expected Time Complexity: O(row * col)
    Expected Auxiliary Space: O(row * col)


*/


function getUniqueRow(row, col, mat) {

    let strArr = []

    for (let i = 0; i < row; i++) {

        let temp = ''
        for (let j = 0; j < col; j++) {
            temp += mat[i][j]
        }

        const found = strArr.find((str) => str == temp)
        if (!found) {
            strArr.push(temp)
        }
    }

    return strArr
}




let row = 3, col = 4
row = 2, col = 4
let mat = [[1, 1, 0, 1], [1, 0, 0, 1], [1, 1, 0, 1]]
mat = [[0, 0, 0, 1], [0, 0, 0, 1]]

const res = getUniqueRow(row, col, mat)
console.log(res)

