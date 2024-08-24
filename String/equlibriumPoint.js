/*

Given an array A of n non negative numbers. 
The task is to find the first equilibrium point in an array. 
Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it.


Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 
3 
Explanation:  
equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2). 

Input:
n = 1
A[] = {1}
Output: 
1
Explanation:
Since there's only element hence its only the equilibrium point.


*/


function equlibriumPoint(a, n) {

    if(n == 1) {
        return 1
    }
    
    let start = 0
    let end = n-1
    
    let frontSum = a[start]
    let endSum = a[end]
    
    while(start < end) {
        
        // console.log("frontSum", frontSum)
        // console.log("endSum", endSum)

        // console.log("start", start)
        // console.log("end", end)

        if(end - start == 2) {
   
            if(frontSum == endSum){
                return start+2
            }
            else {
                return -1
            }
        }
        
        else if(frontSum < endSum) {
            start++
            frontSum += a[start]
        }
        
        else {
            end--
            endSum += a[end]
        }
        
    }
    
    return -1
}


// const driverArr = [1, 3, 5, 2, 2]
// const driverArr = [1, 2, 1, 3, 4, 6, 1]
// const driverArr = [1, 2, 1, 3, 4, 6, 1, 5]
const driverArr = [1, 0]

// console.log(equlibriumPoint(driverArr, driverArr.length))

