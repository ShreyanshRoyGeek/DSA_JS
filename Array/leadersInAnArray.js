/*

Input:
n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17 
as it is greater than all the elements
to its right.  Similarly, the next 
leader is 5. The right most element 
is always a leader so it is also 
included.


Input:
n = 5
A[] = {1,2,3,4,0}
Output: 4 0
Explanation: 0 is the rightmost element
and 4 is the only element which is greater
than all the elements to its right.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

*/


function leaders(arr, n) { // O(n^2)

    // code here
        
    let tempArr = []
        
    for(let i=0; i<n; i++) {
        
        let isValidNumber = true
        
        for(let j=i+1; j<n; j++) {
            
            if(arr[i] < arr[j]) {
                
                isValidNumber = false
                break
            }
        }

        if(isValidNumber){
            tempArr.push(arr[i])
        }
    }

    return tempArr
}




function findLeaders(arr) { //0(n)

    const n = arr.length;
    const leaders = [];
    let maxRight = arr[n - 1]; // The rightmost element is always a leader
    leaders.push(maxRight);

    // Iterate through the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            // If the current element is greater than or equal to the maximum element encountered so far,
            // it is a leader. Update the maximum element.
            maxRight = arr[i];
            leaders.unshift(maxRight); // Add the leader to the beginning of the leaders array
        }
    }

    return leaders;
}




function findLeadersCustom(arr, n){  // 0(n)
    
    let tempArr = []
    let maxRight = arr[n-1]
    tempArr.push(arr[n-1])

    for(let i=n-2; i>=0; i--) {

        if(arr[i] > maxRight) {

            maxRight = arr[i]

            tempArr.unshift(arr[i])
        }
    }

    return tempArr
}



// const driverArr = [16,17,4,3,5,2]
const driverArr = [1, 2, 3, 4, 0]
const res = findLeadersCustom(driverArr, driverArr.length)

console.log(res)

