function swapDiagonal(mat) {

    /*  
        row 0: swap 0 -> n-1
        row 1: 1 -> n-2
        row 2: 2 -> n-3
        ..
    */

    let n = mat.length, m = mat[0].length

    let i = 0, j = m-1

    for(let k=0; k<n; k++) {

        let temp = mat[k][i]
        mat[k][i] = mat[k][j]
        mat[k][j] = temp

        i++, j--
    }

    return mat

}


const mat = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8]]

const res = swapDiagonalI(mat)
console.log(res)

