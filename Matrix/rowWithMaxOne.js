/*

    Row with max 1s -> (Medium)

    You are given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. 
    Your task is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

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


    Expected Complexities
    Time Complexity: O(n + m)
    Auxiliary Space: O(1)


*/


/* brute-force  approach - O(n^2) time and O(1) space */
function rowWithMaxOne(mat) {

    let currRow = -1, maxCount = 0

    for (let i = 0; i < mat.length; i++) {

        let count = 0

        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) count++
        }

        if (maxCount < count) {
            maxCount = count
            currRow = i
        }

    }

    return currRow

}


// optimized approach - using binary search
function rowWithMaxOneI(mat) {

    let maxCount = -1, index = -1

    for (let i = 0; i < mat.length; i++) {

        let countOnce = first(mat[i], 0, mat[i].length - 1)

        if (countOnce !== -1 && mat[i].length - index > maxCount) {
            maxCount = mat[i].length - index
            index = i
        }
    }

    return index


    function first(arr, low, high) {

        while (high >= low) {

            let mid = low + parseInt((high - low)) / 2

            if ((mid == 0 || arr[mid - 1] == 0) && arr[mid] == 1) return mid

            else if (arr[mid] == 0) return first(arr, mid + 1, high)

            else return first(arr, low, (mid - 1))

        }

    }

}



let mat = [[0, 1, 1, 1], [0, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]]
// let mat = [[0,0], [1,1]]
// let mat = [[0,0], [0,0]]
const res = rowWithMaxOneI(mat)
console.log(res)


