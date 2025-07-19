/*

    Convert array into Zig-Zag fashion --> Array(Easy)

    Given an array arr of distinct elements, the task is to rearrange the elements of the array in a zig-zag fashion so that the converted array should be in the below form: 

    arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 

    Note: Modify the given arr[] only, If your transformation is correct, the output will be "true" else the output will be "false". 


    Input: arr[] = [4, 3, 7, 8, 6, 2, 1]
    Output: true
    Explanation:  After modification the array will look like 3 < 7 > 4 < 8 > 2 < 6 > 1, the checker in the driver code will produce 1.


    Input: arr[] = [4, 7, 3, 8, 2]
    Output: true
    Explanation: After modification the array will look like 4 < 7 > 3 < 8 > 2 hence output will be 1.


    Input: arr[] = [2, 8, 1, 7, 5, 9]
    Output: true


    Constraints:
    1 <= arr.size() <= 106
    0 <= arri <= 108


*/


function convertArrayIntoZigZagFashion(arr) {

    function swap(i,j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let flag = 1 // if x<y => true, don't swap otherwise swap

    for(let i=0; i<arr.length - 1; i++) {
        if(flag == 1) {
            if(arr[i] > arr[i+1]) {
                swap(i, i+1)
            }
            flag = 0
        }
        else {
            if(arr[i] < arr[i+1]) {
                swap(i, i+1)
            }
            flag = 1
        }
    }

    let exp = 1 // x<y --> true

    for(let j=0; j<arr.length - 1; j++) {
        if(exp == 1) {
            if(arr[j] > arr[j+1]) {
                return false
            }
            exp = 0
        }
        else {
            if(arr[j] < arr[j+1]) {
                return false
            }
            exp = 1
        }
    }
    return true

}


let arr = [4, 3, 7, 8, 6, 2, 1]

const res = convertArrayIntoZigZagFashion(arr)
console.log('res', res)
