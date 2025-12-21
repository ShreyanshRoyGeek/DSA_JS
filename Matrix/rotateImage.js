/*
    Rotate Image --> (Medium)

    ou are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

    
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

    Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

*/


function rotateImage(mat) {


    let n = mat.length, m = mat[0].length

    /*let res = []

    for(let i=0; i<n; i++) {

        let temp = []

        for(let j=0; j<m; j++) {
            temp.push(0)
        }

        res.push(temp)
    }*/

    let res = Array.from({ length: n }, () => Array(n).fill(0))

    let i = 0, j = m -1

    while(i<n && j>=0) {

        for(let k=0; k<m; k++) {

            res[k][j] = mat[i][k] 
        }

        i++, j--
    }

    for (let i = 0; i < n; i++) {
        mat[i] = res[i].slice();
    }

    return mat

}



function rotateImageI(mat) {

    let n = mat.length

    for(let i=0; i<Math.floor((n+1)/2); i++) {

        for(let j=0; j<Math.floor(n/2); j++) {

            // start 4 ways swap

            // temp = bottom_left
            let temp = mat[n-1-j][i]

            // bottom left = bottom right
            mat[n-1-j][i] = mat[n-1-i][n-j-1]

            // bottom right = top right
            mat[n-1-i][n-j-1] = mat[j][n-1-i]

            // top right = top left
            mat[j][n-1-i] = mat[i][j]

            // top left = temp
            mat[i][j] = temp

        }
    }

    return mat
    
}



function rotateImageUsingTranspose(mat) {

    let n = mat.length

    for(let i=0; i<n; i++) {

        for(let j=i+1; j<n; j++) {

            let temp = mat[i][j]
            mat[i][j] = mat[j][i]
            mat[j][i] = temp

            // [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }

    for(let i=0; i<n; i++) {

        let start = 0, end = n-1

        while(start < end) {
            let temp = mat[start]
            mat[start] = mat[end]
            mat[end] = temp
        }

        // mat[i].reverse()
    }

    return mat


}


// let mat = [[1,2,3],[4,5,6],[7,8,9]]
let mat = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
const res = rotateImageI(mat)
console.log(res)

