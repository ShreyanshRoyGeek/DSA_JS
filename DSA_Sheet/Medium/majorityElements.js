/*

Majority Element --> Array (Medium)

Given an array A of N elements. Find the majority element in the array. 
A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.


Input:
N = 3 
A[] = {1,2,3} 
Output:
-1
Explanation:
Since, each element in 
{1,2,3} appears only once so there 
is no majority element.


Input:
N = 5 
A[] = {3,1,3,3,2} 
Output:
3
Explanation:
Since, 3 is present more
than N/2 times, so it is 
the majority element.



Your Task:
The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.
 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
 

*/


function majorityElemetsUnfinished() {
        
    if(size == 1) {
        return a[0]
    }
    
    let hashTable = {}
    
    for(let i=0; i<size; i++) {
        
        hashTable[a[i]] = (hashTable[a[i]] || 0)  + 1
    }
    
    // console.log(hashTable)
    
    let maxEleValue = -Infinity
    
    for(let ele in hashTable) {
        
        if(hashTable[ele] > maxEleValue) {
            maxEleValue = hashTable[ele]
        }
    }
    
    // console.log(maxEleValue)
    
    if(maxEleValue == 1) {
        return -1
    }
    
    else if (maxEleValue < Math.floor(size/2)) {
        return -1
    }
    
    return maxEleValue

}



function findMajorityElemets(arr) {
    let ele = 0
    let count = 0

    let  size = arr.length

    for(let i=0; i<arr.length; i++) {

        if(count == 0) {
            ele = arr[i]
        }

        if(ele == count) {
            count++
        }
        else {
            count--
        }
    }

    count = 0

    for(let i=0; i<arr.length; i++) {

        if(ele == arr[i]) {
            count++
        }
    }

    if(count > size/2) {
        return ele
    }

    return -1
}


let driverArr = [3,1,3,3,2]
driverArr = [1,2,3]

const res = findMajorityElemets(driverArr)

console.log(res)

