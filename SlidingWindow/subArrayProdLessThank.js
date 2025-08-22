/*

    Subarrays Product Less than K --> (Medium)

    Given an array of positive numbers, the task is to find the number of possible contiguous subarrays having product less than a given number k.

    Examples 1: 
    Input : 
    n = 4, k = 10
    a[] = [1, 2, 3, 4]
    Output : 
    7
    Explanation:
    The contiguous subarrays are {1}, {2}, {3}, {4} 
    {1, 2}, {1, 2, 3} and {2, 3}, in all these subarrays
    product of elements is less than 10, count of
    such subarray is 7.
    {2,3,4} will not be a valid subarray, because 
    2*3*4=24 which is greater than 10.


    Example 2:
    Input:
    n = 7 , k = 100
    a[] = [1, 9, 2, 8, 6, 4, 3]
    Output:
    16


    Your Task:  
    You don't need to read input or print anything. 
    Your task is to complete the function countSubArrayProductLessThanK() which takes the array a[], its size n and an integer k as inputs and returns the count of required subarrays.

    Constraints:
    1<=n<=106
    1<=k<=1015
    1<=a[i]<=105

    Expected Complexities:
    Time Complexity: O(n)
    Auxiliary Space: O(1)

*/

function countSubArrayProductLessThanK(arr, k) { // 0(n*n) 

    let count = 0

    for(let i=0; i<arr.length; i++) {

        let prod = 1

        for(let j=i; j<arr.length; j++) {

            prod *= arr[j]
            if(prod <k) {
                count++
            }
            else {
                break
            }
        }
    }

    return count
}


function getSubArrayProductLessThanK(arr, k) {

    let j=0, i=0, n = arr.length, prod = 1, ans = 0

    while(j<n) {
        prod *= arr[j]

        while(prod >= k && i<=j) {
            prod = Math.floor(prod / arr[i])
            i++
        }
        ans += (j-i+1)
        j++

    }

    return ans

}

let arr = [1, 2, 3, 4]
let k = 10
const res = countSubArrayProductLessThanK(arr, k)
console.log(res)


