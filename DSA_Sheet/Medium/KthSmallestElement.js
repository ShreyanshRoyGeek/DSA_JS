/*

Kth smallest element --> Array(Medium)

Given an array arr[] and an integer k where k is smaller than the size of the array, 
the task is to find the kth smallest element in the given array. 
It is given that all array elements are distinct.

Note:-  l and r denotes the starting and ending index of the array.



Input:
n = 6
arr[] = 7 10 4 3 20 15
k = 3
l=0 r=5

Output : 
7

Explanation :
3rd smallest element in the given 
array is 7.



Input:
n = 5
arr[] = 7 10 4 20 15
k = 4 
l=0 r=4

Output : 
15

Explanation :
4th smallest element in the given 
array is 15.


*/


function kthSmallestElement(arr, l, r, k) {

    arr = arr.sort((a,b) => a-b)
    
    if(k >=l &&  k<= r+1) {
        return arr[k-1]
    }

}


let driverArr = [7, 10, 4, 3, 20, 15]

let l = 0 // starting index
let r = driverArr.length -1 // ending index
let k = 3 // kth smallest element

const res = kthSmallestElement(driverArr, l, r, k)

console.log(res)

