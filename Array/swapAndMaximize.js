/*

    Swap and Maximize --> Array (Easy)

    Given an array arr[ ] of positive elements. Consider the array as a circular array, meaning the element after the last element is the first element of the array. 
    The task is to find the maximum sum of the absolute differences between consecutive elements with shuffling of array elements allowed i.e. shuffle the array elements and make [a1..an] such order that  |a1 – a2| + |a2 – a3| + …… + |an-1 – an| + |an – a1| is maximized.

    Input: arr[] = [4, 2, 1, 8]
    Output: 18
    Explanation: After Shuffling, we get [1, 8, 2, 4]. 
    Sum of absolute difference between consecutive elements after rearrangement = |1 - 8| + |8 - 2| + |2 - 4| + |4 - 1| = 7 + 6 + 2 + 3 = 18.

    Input: arr[] = [10, 12]
    Output: 4
    Explanation: No need of rearrangement. Sum of absolute difference between consecutive elements = |10 - 12| + |12 - 10| = 2 + 2 = 4.


*/


function swapAndMaximize(arr) { // O(nlogn) // O(n)

    arr = arr.sort((a, b) => a - b)
    // console.log(arr)

    let i = 0, j = arr.length - 1
    let temp = []

    while (i <= j) {
        temp.push(arr[i], arr[j])
        i++, j--
    }

    temp.push(arr[0])
    // console.log(temp)

    let diff = 0
    for (let i = 0; i < temp.length - 1; i++) {
        diff += Math.abs(temp[i] - temp[i + 1])
    }

    return diff
}



function maxSumAfterSwap(arr) { // O(nlogn) // O(1)
    
    arr.sort((a, b) => a - b);

    let i = 0;
    let sum = 0;
    let n = arr.length;
    let j = n - 1;

    // Loop to calculate the sum
    while (i < j) {
        sum += arr[j] - arr[i];
        sum += arr[j] - arr[i + 1];
        i++;
        j--;
    }

    // Add the difference between the middle element and the first element
    sum += arr[Math.floor(n / 2)] - arr[0];

    return sum;
}


let arr = [4, 2, 1, 8]
arr = [10, 12]
const res = swapAndMaximize(arr)
console.log('res', res)

