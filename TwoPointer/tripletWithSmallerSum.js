/*

    Triplets with Smaller Sum --> (Medium)

    Given an array arr[] of distinct integers of size n and a value sum, the task is to find the count of triplets (i, j, k), having (i<j<k) with the sum of (arr[i] + arr[j] + arr[k]) smaller than the given value sum.

    Examples :
    Input: n = 4, sum = 2, arr[] = {-2, 0, 1, 3}
    Output:  2
    Explanation: Below are triplets with sum less than 2 (-2, 0, 1) and (-2, 0, 3). 

    Input: n = 5, sum = 12, arr[] = {5, 1, 3, 4, 7}
    Output: 4
    Explanation: Below are triplets with sum less than 12 (1, 3, 4), (1, 3, 5), (1, 3, 7) and (1, 4, 5).

    Expected Time Complexity: O(N2).
    Expected Auxiliary Space: O(1).

*/


function countTripletWithSmallerSumII(arr, sum) {

    let resCount = 0

    for(let i=0; i<arr.length -2; i++) {

        for(let j=i+1; j<arr.length -1; j++) {

            for(let k=j+1; k<arr.length; k++) {

                if((arr[i] + arr[j] + arr[k]) < sum) resCount++
            }
        }
    }

    return resCount
}


function countTripletWithSmallerSum(arr, sum) {

    arr = arr.sort((a, b) => a - b)

    let n = arr.length, res = 0

    for (let i = 0; i < n; i++) {

        let l = i+1, r = n-1

        while (l < r) {
            if ((arr[i] + arr[l] + arr[r]) >= sum) {
                r--
            }
            else {
                res += (r-l)
                l++
            }
        }

    }

    return res
}


let arr = [-2, 0, 1, 3]
let sum = 2

const res = countTripletWithSmallerSum(arr, sum)
console.log(res)
