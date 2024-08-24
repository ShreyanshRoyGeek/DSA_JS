/*

    Given an array of N integers, and an integer K, 
    find the number of pairs of elements in the array whose sum is equal to K.

    Input:
    N = 4, K = 6
    arr[] = {1, 5, 7, 1}
    Output: 2
    Explanation: 
    arr[0] + arr[1] = 1 + 5 = 6 
    and arr[1] + arr[3] = 5 + 1 = 6.


    Input:
    N = 4, K = 2
    arr[] = {1, 1, 1, 1}
    Output: 6
    Explanation: 
    Each 1 will produce sum 2 with any 1.


*/



function getPairsCount(arr, k) {

    let freq = {};
    let count = 0;
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let K = k - arr[i]
        count += freq[K] || 0;
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    return count
}




function twoSum(arr, sum) {

    const table = {}

    for(let i=0; i<arr.length; i++) {

        const diff = sum - arr[i]

        if(table[diff] != undefined) {
            return [ table[diff] , i ]
        }
        
        table[arr[i]] = i
    }

}




// Example usage
const arr = [1, 5, 2, 4];
const K = 6;
console.log(getPairsCount(arr, K)); // Output: 2 (Pairs: [1, 5] and [2, 4])

console.log(twoSum(arr, K))

