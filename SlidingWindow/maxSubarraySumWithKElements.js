/*

    Maximum Sum of a Subarray with K Elements 

    Given an array arr[] and an integer k, we need to calculate the maximum sum of a subarray having size exactly k.

    Input  : arr[] = [5, 2, -1, 0, 3], k = 3
    Output : 6
    Explanation : We get maximum sum by considering the subarray [5, 2 , -1]

    Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4 
    Output : 39
    Explanation : We get maximum sum by adding subarray [4, 2, 10, 23] of size 4.

*/



function maxSubarraySumWithKElements(arr, k) {

    let n = arr.length
    let sum = 0

    // for first window
    for(let i=0; i<k; i++) {
        sum += arr[i]
    }

    let maxSum = sum

    let l = 0, r = k
    
    // for remaning window
    for(let i=1; i<n-k+1; i++) {

        sum -= arr[l]
        l++

        sum += arr[r]
        r++

        maxSum = Math.max(sum, maxSum)
    }

    return maxSum

}


// let arr = [5, 2, -1, 0, 3]
// let k = 3

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
let k = 4

let res = maxSubarraySumWithKElements(arr, k)
console.log(res)

