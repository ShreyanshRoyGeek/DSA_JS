/*
    Sliding Window Maximum (Maximum of all subarrays of size K)


    Examples : 

    Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
    Output: [3, 3, 4, 5, 5, 5, 6] 
    Explanation: 
    1st contiguous subarray = [1 2 3] max = 3
    2nd contiguous subarray = [2 3 1] max = 3
    3rd contiguous subarray = [3 1 4] max = 4
    4th contiguous subarray = [1 4 5] max = 5
    5th contiguous subarray = [4 5 2] max = 5
    6th contiguous subarray = [5 2 3] max = 5
    7th contiguous subarray = [2 3 6] max = 6

    Input: arr[] = [5, 1, 3, 4, 2, 6], k = 1
    Output: [5, 1, 3, 4, 2, 6]
    Explanation: When k = 1, each element in the array is its own subarray, so the output is simply the same array.

    Input: arr[] = [1, 3, 2, 1, 7, 3], k = 3
    Output: [3, 3, 7, 7]

*/


function getSlidingWindowMax(arr, k) {
    let res = []

    for (let i = 0; i < (arr.length-k+1); i++) {
        let max = arr[i]
        for (let j = i; j < (i + k); j++) {
            if (arr[j] > max) {
                max = arr[j]
            }
        }
        res.push(max)
    }
    return res
}


function maxOfSubarrays(arr, k) { // 0(n*k)
    let n = arr.length;

    let res = [];
  
    for (let i = 0; i <= n - k; i++) {
      
        let max = arr[i];
        for (let j = 1; j < k; j++) {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        res.push(max);
    }
  
    return res;
}


let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
let k = 3

const res = maxOfSubarrays(arr, k)
console.log(res) 

