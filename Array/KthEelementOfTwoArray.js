/*
    K-th element of two Arrays --> (Medium) 

    Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

    Examples :
    Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
    Output: 6
    Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
    
    Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
    Output: 10
    Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.


    Constraints:
    1 ≤ a.size(), b.size() ≤ 106
    1 ≤ k ≤ a.size() + b.size()
    0 ≤ a[i], b[i] ≤ 108


    Expected Complexities
    Time Complexity: O(log(min(a, b)))
    Auxiliary Space: O(1)

*/




function getKthElementsOfSortedCobineArray(arr1, arr2, k) { // 0((n+m) * log(n+m))

    let arr = []

    for(ele of arr1) {
        arr.push(ele)
    }

    for(ele of arr2) {
        arr.push(ele)
    }

    arr = arr.sort((a,b) => a-b)

    return arr[k-1]

}


function getKthElementsOfSortedCobinedArrayII(arr1, arr2, k) {
    
    let n = arr1.length, m = arr2.length
    let arr = new Array(n+m)
    let d=0, i=0, j=0

    while(i<n && j<m) {

        if(arr1[i] < arr2[j]) {
            arr[d++] = arr1[i++]
        }
        else {
            arr[d++] = arr2[j++]
        }
    }

    while(i<n) {
        arr[d++] = arr1[i++]
    }

    while(j<m) {
        arr[d++] = arr2[j++]
    }
    
    return arr[k-1]

}




let arr1 = [2, 3, 6, 7, 9]
let arr2 = [1, 4, 8, 10]
let k = 5

const res = getKthElementsOfSortedCobinedArrayII(arr1, arr2, k)
console.log(res)

