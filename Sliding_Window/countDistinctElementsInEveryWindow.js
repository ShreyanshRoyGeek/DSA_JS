/*
    Count distinct elements in every window --> (Sliding Window) --> Easy

    Given an array of integers and a number K. 
    Find the count of distinct elements in every window of size K in the array.

    Example 1:
    Input:
    N = 7, K = 4
    A[] = {1,2,1,3,4,2,3}
    Output: 3 4 4 3
    Explanation: Window 1 of size k = 4 is
    1 2 1 3. Number of distinct elements in
    this window are 3. 
    Window 2 of size k = 4 is 2 1 3 4. Number
    of distinct elements in this window are 4.
    Window 3 of size k = 4 is 1 3 4 2. Number
    of distinct elements in this window are 4.
    Window 4 of size k = 4 is 3 4 2 3. Number
    of distinct elements in this window are 3.


    Example 2:
    Input:
    N = 3, K = 2
    A[] = {4,1,1}
    Output: 2 1

    Your Task:
    Your task is to complete the function countDistinct() which takes the array A[], the size of the array(N) and the window size(K) as inputs and returns an array containing the count of distinct elements in every contiguous window of size K in the array A[].

    Expected Time Complexity: O(N).
    Expected Auxiliary Space: O(N).


    Constraints:
    1 <= K <= N <= 105
    1 <= A[i] <= 105 , for each valid i


*/


function calculateDistinctElements(arr, k) {

    let window = []
    let resArr = []

    let n = arr.length
    let index = 0


    let count = {}
    while(index < k && index < n) {
        count[arr[index]] =  ( count[arr[index]] || 0 ) + 1 
        window.push(arr[index])
        index++
    }

    // console.log('count1',count)

    resArr[0] = Object.keys(count)?.length


    for(let i=1; i<n-k+1; i++) {

        //remove
        window.shift()
        count[arr[i-1]]--

        //add
        window.push(arr[i+k-1])
        
        count[arr[i+k-1]] = ( count[arr[i+k-1]] || 0 ) + 1
        
        if(count[arr[i-1]] == 0) delete count[arr[i-1]]

        resArr[i] = Object.keys(count)?.length

    }

    // console.log('count2',count)

    return resArr

}


function calculateDistinctElementsII(arr, k) { // O(n) time complexity

    // let window = []
    let resArr = []

    let n = arr.length
    let index = 0

    let count = new Map()

    while(index < k && index < n) {

        // window.push(arr[index])
        let res = count.get(arr[index])
        count.set(arr[index], res ? res+1 : 1)
        index++
    }

    resArr[0] = count.size

    // console.log('count1',count)


    for(let i=1; i<n-k+1; i++) {

        //remove
        // window.shift()
        let res = count.get(arr[i-1])
        if(res == 1) { 
            count.delete(arr[i-1]) 
        }
        else { 
            count.set(arr[i-1], res-1) 
        }


        //add
        // window.push(arr[i+k-1])
        res = count.get(arr[i+k-1])
        count.set(arr[i+k-1], res ? res + 1 : 1)

        resArr[i] = count.size

    }

    // console.log('count2',count)

    return resArr

}


let diverArr = [1,2,1,3,4,2,3]
let k = 4
diverArr = [4,1,1]
k = 2


const res = calculateDistinctElementsII(diverArr, k)
console.log('res', res)

