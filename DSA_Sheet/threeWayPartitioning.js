
/*

Three way partitioning --> Array(Easy)


Given an array of size n and a range [a, b]. The task is to partition the array around the range such that the array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.

Note: The generated output is 1 if you modify the given array successfully.

Geeky Challenge: Solve this problem in O(n) time complexity.



Input: 
n = 5
array[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 
1
Explanation: 
One possible arrangement is: {1, 2, 3, 3, 4}. If you return a valid arrangement, output will be 1.



Input: 
n = 6 
array[] = {1, 4, 3, 6, 2, 1}
[a, b] = [1, 3]
Output: 
1
Explanation: 
One possible arrangement is: {1, 3, 2, 1, 4, 6}. If you return a valid arrangement, output will be 1.



Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)



*/


function threeWayPatitioning(arr, a, b) {

    const n = arr.length
    
    let start  = 0

    let end = n - 1
    
    let curr = 0


    while(curr <= end) {

        if(arr[curr] < a) {

            [arr[curr], arr[start]] = [arr[start], arr[curr]]
            start++
            curr++
        }

        else if(arr[curr] >= a && arr[curr] <= b) {
            curr++
        }

        else if(arr[curr] > b) {

            [arr[curr], arr[end]]  = [arr[end], arr[curr]]
            end--
        }

    }

    return arr

}


let driverArr = [1, 4, 3, 6, 2, 1]
let a = 2
let b = 3

const res = threeWayPatitioning(driverArr, a, b)

console.log(res)


