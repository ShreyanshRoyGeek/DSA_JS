
/*

--> Array(Easy)

Smallest subarray with sum greater than x  


Given an array of integers (A[])  and a number x, 
find the smallest subarray with sum greater than the given value. 
If such a subarray do not exist return 0 in that case.


Input:
A[] = {1, 4, 45, 6, 0, 19}
x  =  51
Output: 3
Explanation:
Minimum length subarray is 
{4, 45, 6}


Input:
A[] = {1, 10, 5, 2, 7}
x  = 9
Output: 1
Explanation:
Minimum length subarray is {10}


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


*/


function smallestSubArrayWithSumGraterThanX(arr, x) {

    const n = arr.length

    let windStart = 0
    let windEnd = 0

    let sum = 0
    let minLen = Infinity

    let len = 0


    while(windEnd < n) {

        // expansion
        sum += arr[windEnd]

        if(sum > x) {

            len = windEnd - windStart + 1

            minLen = Math.min(minLen, len)

            while(windStart < windEnd && sum > x) {

                // shrinking
                sum -= arr[windStart]
                windStart++
    
                if(sum > x) {
                    
                    len = windEnd - windStart + 1 
                    minLen = Math.min(minLen, len)
                }

            }

        }

        windEnd++

    }

    return minLen == Infinity ? 0 : minLen


}


let driverArr = [1, 4, 45, 6, 0, 19]
let x = 51

// driverArr = [1, 10, 5, 2, 7]
// x = 9

const res = smallestSubArrayWithSumGraterThanX(driverArr, x)

console.log(res)

