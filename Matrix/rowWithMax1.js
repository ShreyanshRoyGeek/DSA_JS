/*
    Row with max 1s --> (Medium)

    You are given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. Your task is to find and return the index of the first row that contains the maximum number of 1s. 
    If no such row exists, return -1.

    Note:

    The array follows 0-based indexing.
    The number of rows and columns in the array are denoted by n and m respectively.


    Examples:
    Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
    Output: 2
    Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.

    Input: arr[][] = [[0,0], [1,1]]
    Output: 1
    Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.

    Input: arr[][] = [[0,0], [0,0]]
    Output: -1
    Explanation: No row contains any 1s, so the output is -1.

    Constraints:
    1 ≤ arr.size(), arr[i].size() ≤ 103
    0 ≤ arr[i][j] ≤ 1 


    Expected Complexities
    Time Complexity: O(n + m)
    Auxiliary Space: O(1)


*/


function rowWithMax1(mat) { // O(n^2) - time and O(n) - space

    let n = mat.length, m = mat[0].length

    let max = -Infinity, maxIndex = -1

    for(let i=0; i<n; i++) {

        let count = 0
        for(let j=0; j<m; j++) {
            if(mat[i][j] == 1) count++
        }

        if(count > max && count > 0) {
            max  = count
            maxIndex = i
        }
    }

    return maxIndex

}


function rowWithMax1Optimized(mat) {

    let n = mat.length, m = mat[0].length
    let row = -1
    let col = m-1

    for(let i=0; i<n; i++) {

        for(let j=col; j>=0; j--) {

            if(arr[i][j] == 1) {
                row = i
                col--
            }
            else {
                break
            }
        }
    }

    return row
}



let arr = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// let arr = [[0,0], [1,1]]
// let arr = [[0,0], [0,0]]
const res = rowWithMax1Optimized(arr)
console.log(res)

