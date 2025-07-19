/*

    Move All Zeroes to End --> Array (Easy)

    You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. 
    The operation must be performed in place, meaning you should not use extra space for another array.


    Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
    Output: [1, 2, 4, 3, 5, 0, 0, 0]
    Explanation: There are three 0s that are moved to the end.


    Input: arr[] = [10, 20, 30]
    Output: [10, 20, 30]
    Explanation: No change in array as there are no 0s.


    Input: arr[] = [0, 0]
    Output: [0, 0]
    Explanation: No change in array as there are all 0s.

*/


function pushZeroTillTheEnd(arr) {

    function swap(i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    
    let j = arr.length - 1
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            if(arr[j] !== 0) {
                swap(i, j)
                console.log('j --> count', j)
            }
            else {
                console.log('arr[j] -->', arr[j], j)
                while(arr[j] > 0) {
                    j--
                    console.log('j loop -->', arr[j])
                }
                /*do {
                    j = j - 1
                    console.log('j loop -->', arr[j])
                } while(arr[j] !== 0)*/
                if(arr[j] !== 0) {
                    swap(i, j)
                    console.log('j -->', j)
                }
                // swap(i, j) 
            }
        }
    }
    return arr
}



let arr = [1, 2, 0, 4, 3, 0, 5, 0]
const res = pushZeroTillTheEnd(arr)
console.log(res)

