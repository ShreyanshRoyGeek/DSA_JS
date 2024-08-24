/*

Given an array arr[] of positive integers of size N. 
Reverse every sub-array group of size K.


Input:
N = 5, K = 3
arr[] = {1,2,3,4,5}
Output: 3 2 1 5 4
Explanation: First group consists of elements
1, 2, 3. Second group consists of 4,5.


Input:
N = 4, K = 3
arr[] = {5,6,8,9}
Output: 8 6 5 9


*/


function reverseArrayInGroup(arr, k) {

    for(let i=0; i<arr.length-k; i=i+k) {

        let count = 0

        while(count <= k) {

            
            let lastEle = i+k-1
            let firstEle = i

            if(arr[i+k-1]) {
                lastEle = arr[i+k-1]
            }
            else if(arr[i+k-2]){
                lastEle = arr[i+k-2]
            }
            else if(arr[i+k-3]){
                lastEle = arr[i+k-3]
            }

            console.log("lastEle", lastEle)
            console.log("firstEle", firstEle)

            while(lastEle >= firstEle) {

                let temp = arr[lastEle]
                arr[lastEle] = arr[firstEle]
                arr[firstEle] = temp

                firstEle++, lastEle--

            }

            count++

        }
    }

    return arr

}


const driverArr = [1,2,3,4,5]

console.log(reverseArrayInGroup(driverArr, 3))
