/*
    Subarrays with given sum  --> ()  --> Easy
    
    Given an unsorted array arr[] of integers and a sum k. 
    The task is to count the number of subarrays that add to a given number k.
    

    Examples:
    Input: arr[] = [10, 2, -2, -20, 10], k = -10
    Output: 3
    Explanation: Subarrays with sum -10 are: [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10].
    Input: arr[] = [1, 4, 20, 3, 10, 5], k = 33
    Output: 1


    Expected Time Complexity: O(n).
    Expected Auxiliary Space: O(n).

    Constraints:
    1 ≤ arr.size() ≤ 106
    -106 ≤ arr[i],k ≤ 106

*/


// Sliding window techniques works for non-negative elements
function subArrayWithGivenSum(arr, k) {

    let sum = 0
    let start = 0

    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        while (sum > k && start <= i) {
            sum -= arr[start]
            start++
        }

        if (sum == k) {
            /*for(let j=start; j<=i; j++) {
                resArr.push(arr[j])
            }*/
            return arr.slice(start, i + 1)
        }
    }

    return null

}


function subArrayWithGivenSumII(arr, k) { 

    // hash map approach

    let sum = 0
    let count = 0
    let map = new Map()             

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (sum == k) {
            count++
        }

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }

        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }
    
    return count
}



let arr = [10, 2, -2, -20, 10]
let k = -10

const res = subArrayWithGivenSumII(arr, k)
console.log(res)

