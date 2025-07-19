
/*
    Maximum Product Subarray  --> (Array)
    
    Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

    Note: It is guaranteed that the output fits in a 32-bit integer.

    Input: arr[] = [-2, 6, -3, -10, 0, 2]
    Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
    Output: 180

    Input: arr[] = [-1, -3, -10, 0, 6]
    Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.
    Output: 30

    Input: arr[] = [2, 3, 4] 
    Explanation: For an array with all positive elements, the result is product of all elements. 
    Output: 24 

    Constraints:
    -10  ≤  arr[i]  ≤  10
    1 ≤ arr.size() ≤ 106

*/


function findMaxProductSubArray(arr) {

    let res = 0

    for(let i=0; i<arr.length; i++) {
        let prod = 1
        for(let j=i; j<arr.length; j++) {
            if(arr[j] == 0) prod = 1
            prod = prod * arr[j]
            res = Math.max(res, prod)
        } 
    }

    return res
}


function findAllPossibleSubArray(arr) {

    const n = arr.length
    let res = []

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            let temp = []
            for (let j = k; j <= i; j++) {
                temp.push(arr[j])
            }
            if(temp.length > 0) {
                res.push(temp)
            }
        }
    }
    return res

}


let arr = [-2, 6, -3, -10, 0, 2]
// const res = findMaxProductSubArray(arr)
const res = findMaxProductSubArray(arr)
console.log(res)
