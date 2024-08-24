/*

Input:
N = 9, K = 3
arr[] = 1 2 3 1 4 5 2 3 6
Output: 
3 3 4 5 5 5 6 
Explanation: 
1st contiguous subarray = {1 2 3} Max = 3
2nd contiguous subarray = {2 3 1} Max = 3
3rd contiguous subarray = {3 1 4} Max = 4
4th contiguous subarray = {1 4 5} Max = 5
5th contiguous subarray = {4 5 2} Max = 5
6th contiguous subarray = {5 2 3} Max = 5
7th contiguous subarray = {2 3 6} Max = 6


Input:
N = 10, K = 4
arr[] = 8 5 10 7 9 4 15 12 90 13
Output: 
10 10 10 15 15 90 90
Explanation: 
1st contiguous subarray = {8 5 10 7}, Max = 10
2nd contiguous subarray = {5 10 7 9}, Max = 10
3rd contiguous subarray = {10 7 9 4}, Max = 10
4th contiguous subarray = {7 9 4 15}, Max = 15
5th contiguous subarray = {9 4 15 12}, Max = 15
6th contiguous subarray = {4 15 12 90}, Max = 90
7th contiguous subarray = {15 12 90 13}, Max = 90


*/

function findMaxOfEachSubArrayOfSizeK(arr, n, k) {  // Not working for few test cases

    // let elemSubArr = []
    let tempArrSum  = []
        
    for(let i=0; i<n; i++) {
        
        let count = k-1
        
        if(arr[i+count]) {
            
            // let tempArr = []
        
            let index = 0
            
            let maxNum = Number.NEGATIVE_INFINITY
            
            while(index < k) {

                // tempArr.push(arr[i+index])

                if(arr[i+index] > maxNum) {
                    maxNum = arr[i+index]
                }
                
                index++
            }
            
            // if(tempArr.length > 0) {
            //     elemSubArr.push(tempArr)
            // }
            
            tempArrSum.push(maxNum) 
        }
        else {
            break
        }
    }
    
    // console.log(elemSubArr)
    
    return tempArrSum

}