/*
    First negative in every window of size k -->  (Sliding Window) --> Medium

    Given an array A[] of size N and a positive integer K, 
    find the first negative integer for each and every window(contiguous subarray) of size K.


    Example 1:
    Input : 
    N = 5
    A[] = {-8, 2, 3, -6, 10}
    K = 2
    Output : 
    -8 0 -6 -6
    Explanation :
    First negative integer for each window of size k
    {-8, 2} = -8
    {2, 3} = 0 (does not contain a negative integer)
    {3, -6} = -6
    {-6, 10} = -6


    Example 2:
    Input : 
    N = 8
    A[] = {12, -1, -7, 8, -15, 30, 16, 28}
    K = 3
    Output :
    -1 -1 -7 -15 -15 0 


    Your Task:  
    You don't need to read input or print anything. Your task is to complete the function printFirstNegativeInteger() which takes the array A[], its size N and an integer K as inputs and returns the first negative number in every window of size K starting from the first till the end. If a window does not contain a negative integer , then return 0 for that window.

    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(K)


    Constraints:
    1 <= N <= 105
    -105 <= A[i] <= 105
    1 <= K <= N


*/

function firstNegativeNumberOfWindowOfSizeK(arr, k) {

    const queue = []
    const N = arr.length
    let resArr = []

    let indx = 0

    //add all negative elements of window size k in the queue 
    while (indx < k) {
        if (arr[indx] < 0) {
            queue.push(arr[indx])
        }
        indx++
    }

    resArr[0] = queue[0] ? queue[0] : 0

    for (let i = 1; i < N-k+1; i++) {
        
        //remove
        if(arr[i-1] < 0) {
            queue.shift()
        }
        
        //add
        if (arr[i+k-1] < 0) {
            queue.push(arr[i+k-1])
        }
        
        resArr[i] = queue[0] ? queue[0] : 0
    }

    return resArr

}


const driverArr = [12, -1, -7, 8, -15, 30, 16, 28]
let k = 3

const res = firstNegativeNumberOfWindowOfSizeK(driverArr, k)
console.log('res', res)


