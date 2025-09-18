/*

    Spirally traversing a matrix --> (Medium)

    You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array while traversing the matrix in spiral form.

    Examples:

    Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


    Input: mat[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
    Output: [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
    Explanation: Applying same technique as shown above.


    Input: mat[][] = [[32, 44, 27, 23], [54, 28, 50, 62]]
    Output: [32, 44, 27, 23, 62, 50, 28, 54]
    Explanation: Applying same technique as shown above, output will be [32, 44, 27, 23, 62, 50, 28, 54].


    Expected Complexities
    Time Complexity: O(n * m)
    Auxiliary Space: O(n * m)


*/



function spirallyTraverse(mat) {

    let m = mat.length, n = mat[0].length

    let top = 0, bottom = m - 1
    let left = 0, right = n - 1

    let res = []

    // iterate until all elements are printed
    while (top <= bottom && left <= right) {

        // print top row from left to right
        for (let i = left; i <= right; i++) {
            res.push(mat[top][i])
        }
        top++

        // print right col from top to bottom
        for (let i = top; i <= bottom; i++) {
            res.push(mat[i][right])
        }
        right--

        // print bottom row from right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(mat[bottom][i])
            }
            bottom--
        }

        if (left <= right) {
            // print left col from bottom to top
            for (let i = bottom; i >= top; i--) {
                res.push(mat[i][left])
            }
            left++
        }

    }

    return res
}


const mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// let mat = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
const res = spirallyTraverse(mat)
console.log(res)

