
/*

    Sort an array of 0s, 1s and 2s --> Array (Medium)

    Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

    Input: 
    N = 5
    arr[]= {0 2 1 2 0}
    Output:
    0 0 1 2 2
    Explanation:
    0s 1s and 2s are segregated 
    into ascending order.


    Input: 
    N = 3
    arr[] = {0 1 0}
    Output:
    0 0 1
    Explanation:
    0s 1s and 2s are segregated 
    into ascending order.




*/


function sortAnArrayOf012(arr) {

    const n = arr.length

    let start = 0

    let end = n-1

    let curr = 0

    while(curr <= end) {

        if(arr[curr] == 0) {

            [arr[curr], arr[start]] = [arr[start], arr[curr]]
            start++
            curr++
        }

        else if(arr[curr] == 1) {

            curr++
        }

        else if(arr[curr] == 2) {

            [arr[curr], arr[end]] = [arr[end], arr[curr]]
            end--
        }
        
    }
    
    return arr

}


const driverArr = [0, 2, 1, 2, 0]

const res = sortAnArrayOf012(driverArr)
console.log("res", res)

