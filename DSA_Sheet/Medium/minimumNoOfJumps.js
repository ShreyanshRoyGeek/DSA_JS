/*

    Minimum number of jumps --> Array (Medium)


    Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. 
    This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
    Find the minimum number of jumps to reach the end of the array (starting from the first element). 
    If an element is 0, then you cannot move through that element.

    Note: Return -1 if you can't reach the end of the array.


    Input:
    N = 11 
    arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
    Output: 3 
    Explanation: 
    First jump from 1st element to 2nd element with value 3. 
    Now, from here we jump to 5th element with value 9, 
    and from here we will jump to the last. 


    Input :
    N = 6
    arr = {1, 4, 3, 2, 6, 7}
    Output: 2 
    Explanation: 
    First we jump from the 1st to 2nd element and then jump to the last element.


*/

function minimumNoOfJump(arr) {

    let jump = 0
    let pos = 0
    let des = 0

    let n = arr.length
    
    if(n == 1){
        return 0
    }
    
    if(arr[0] == 0) {
        return -1
    }
    
    for(let i=0; i<n-1; i++) {
        
        des = Math.max(des, arr[i] + i)
        
        if(pos == i) {
            
            pos = des
            jump++
        }
    }
    
    if(pos < n-1) {
        return -1
    }
    
    return jump
    
}


function minimumNoOfJumpsTryAndCheck(arr) {

    let n = arr.length

    let elemCount = 0
    let noOfJump = 0
    let start = arr[0]

    while(elemCount < n-1) {

        while(start > 0) {
            elemCount++
            start--
        }

        start = arr[elemCount]
        noOfJump++

        // console.log("elemCount", elemCount)
        // console.log(arr[elemCount])

    }

    return noOfJump

}


let driverArr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// driverArr = [1, 4, 3, 2, 6, 7]

const res = minimumNoOfJump(driverArr)
console.log(res)

