/*

    Count Inversions --> Array (Medium)

    Given an array of integers arr[]. Find the Inversion Count in the array.
    Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

    Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
    If an array is sorted in the reverse order then the inversion count is the maximum. 


    Input: arr[] = [2, 4, 1, 3, 5]
    Output: 3
    Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).


    Input: arr[] = [2, 3, 4, 5, 6]
    Output: 0
    Explanation: As the sequence is already sorted so there is no inversion count.

    
    Input: arr[] = [10, 10, 10]
    Output: 0
    Explanation: As all the elements of array are same, so there is no inversion count.


    Time Complexity --> O(nlogn) 
    Space Complexity --> O(n)

*/


function countInversions(arr) {

    let temp = []
    let count = 0

    for(let i=0; i<arr.length - 1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                count++
                temp.push([arr[i], arr[j]])
            }
        }
    }

    console.log(temp)
    return count
}



function countInversionI(arr) {

    

}


let arr = [2, 4, 1, 3, 5]
const res = countInversions(arr)
console.log('res', res)


