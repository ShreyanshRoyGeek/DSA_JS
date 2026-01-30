/*
    kth largest element in the array 

    Given an integer array arr[] of size n elements and a positive integer K, the task is to return the kth largest element in the given array (not the Kth distinct element).

    Examples:
    Input:  [1, 23, 12, 9, 30, 2, 50], K = 3
    Output: 23

    Input:  [12, 3, 5, 7, 19], K = 2
    Output: 12


*/



function kthLargestElement(arr, K) {

    // Min heap to store K largest elements
    let pq = []

    for(let i=0; i<arr.length; i++) {

        // Add curr elem to the min heap
        pq.push(arr[i])

        pq.sort((a,b) => a-b)

        // if heap exceeds size K, remove smallest element
        if(pq.length > K) {
            pq.shift()
        }

    }

    return pq[0]

}





let arr = [1, 23, 12, 9, 30, 2, 50]
let k = 3

const res = kthLargestElementI(arr, k)
console.log(res)

