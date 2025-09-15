/*
    Array --> (Medium)    

    Given an array arr[] denoting heights of N towers and a positive integer K.

    
    For each tower, you must perform exactly one of the following operations exactly once.

    Increase the height of the tower by K
    Decrease the height of the tower by K
    Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.


    You can find a slight modification of the problem here.
    Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

    Examples :
    Input: k = 2, arr[] = {1, 5, 8, 10}
    Output: 5
    Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.

    Input: k = 3, arr[] = {3, 9, 12, 16, 20}
    Output: 11
    Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
    
    Constraints
    1 ≤ k ≤ 107
    1 ≤ n ≤ 105
    1 ≤ arr[i] ≤ 107

*/



function getMinimumDifference(arr, k) {
    const n = arr.length;
    arr.sort((a, b) => a - b);

    // If we increase all heights by k or decrease all
    // heights by k, the result will be arr[n - 1] - arr[0]
    let res = arr[n - 1] - arr[0];

    // For all indices i, increment arr[0...i-1] by k and
    // decrement arr[i...n-1] by k
    for (let i = 1; i < arr.length; i++) {

        // Impossible to decrement height of ith tower by k, 
        // continue to the next tower
        if (arr[i] - k < 0)
            continue;

        // Minimum height after modification
        let minH = Math.min(arr[0] + k, arr[i] - k);

        // Maximum height after modification
        let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);

        // Store the minimum difference as result
        res = Math.min(res, maxH - minH);
    }
    return res;
}


function minimizeTheHeight(arr, k) {

    arr = arr.sort((a,b) => a-b)

    let n = arr.length
    let shortest = arr[0]
    let longest = arr[n-1]

    let ans = longest - shortest

    for(let i=1; i<n; i++) {

        shortest = Math.min(arr[0]+k, arr[i]-k)
        longest = Math.max(arr[i-1]+k, arr[n-1]-k)

        if(shortest < 0) continue

        ans = Math.min(ans, longest-shortest)
    }

    return ans

}


let arr = [1, 5, 8, 10]
// let arr = [3, 9, 12, 16, 20]
let k = 2

const res = minimizeTheHeight(arr, k)
console.log('res', res)

