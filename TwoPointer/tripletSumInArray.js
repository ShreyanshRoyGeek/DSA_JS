/*

    3 Sum - Triplet Sum in Array --> (Medium)

    Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.
    Return true if such a triplet exists, otherwise, return false.

    Examples:
    Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13
    Output: true 
    Explanation: The triplet {1, 4, 8} sums up to 13.

    Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10
    Output: true 
    Explanation: The triplets {1, 3, 6} and {1, 2, 7} both sum to 10. 

    Input: arr[] = [40, 20, 10, 3, 6, 7], target = 24
    Output: false 
    Explanation: No triplet in the array sums to 24.

    Constraints:
    3 ≤ arr.size() ≤ 103
    1 ≤ arr[i] ≤ 105

    Expected Complexities
    Time Complexity: O(n^2)
    Auxiliary Space: O(1)


*/



function hasTripletSum(arr, target) {

    let n = arr.length

    for (let i = 0; i < n - 2; i++) {

        for (let j = i + 1; j < n - 1; j++) {

            for (let k = i + 2; k < n; k++) {

                if (arr[i] + arr[j] + arr[k] == target) {
                    return true
                }

            }
        }
    }

    return false
}



function hasTripletSumI(arr, target) {

    let n = arr.length

    for (let i = 0; i < n - 1; i++) {

        const set = new Set()

        for (let j = i + 1; j < n; j++) {

            const requiredSum = target - (arr[i] + arr[j])
            if (set.has(requiredSum)) {
                return true
            }

            set.add(arr[j])
        }
    }

    return false
}


function hasTripletSumII(arr, target) {

    arr = arr.sort((a, b) => a - b)
    let n = arr.length

    for (let i = 0; i < n - 2; i++) {

        let l = i + 1, r = n - 1
        let requiredSum = target - arr[i]

        while (l < r) {

            if ((arr[l] + arr[r]) == requiredSum) return true

            if ((arr[l] + arr[r]) < requiredSum) {
                l++
            }
            else if ((arr[l] + arr[r]) > requiredSum) {
                r--
            }

        }
    }

    return false

}

// let arr = [1, 4, 45, 6, 10, 8]
let arr = [-1, 0, 1, 2, -1, -4]
// let target = 22
let target = 0
const res = hasTripletSumII(arr, target)
console.log(res)
