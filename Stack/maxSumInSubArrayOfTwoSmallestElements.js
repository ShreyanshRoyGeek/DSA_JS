/*
    Max sum in sub-arrays --> (Stack, Array) -> (Easy)



    Given an array Arr, with indexes running from 0 to N-1, select any two indexes, i and j such that i<=j-1. 
    From subarray Arr[i...j], find the two smallest numbers and add them, you will get score for that subarray. 
    Your task is to return maximum score possible in the given array Arr.



    Input : arr[] = [4, 3, 1, 5, 6]
    Output : 11
    Subarrays with smallest and 
    second smallest are,
    [4, 3]        
    smallest = 3    second smallest = 4
    [4, 3, 1]    
    smallest = 1    second smallest = 3
    [4, 3, 1, 5]    
    smallest = 1    second smallest = 3
    [4, 3, 1, 5, 6]    
    smallest = 1    second smallest = 3
    [3, 1]         
    smallest = 1    second smallest = 3
    [3, 1, 5]     
    smallest = 1    second smallest = 3
    [3, 1, 5, 6]    
    smallest = 1    second smallest = 3
    [1, 5]        
    smallest = 1    second smallest = 5
    [1, 5, 6]    
    smallest = 1    second smallest = 5
    [5, 6]         
    smallest = 5    second smallest = 6
    Maximum sum among all 
    above choices is, 5 + 6 = 11



    Input : arr[] = {5, 4, 3, 1, 6} 
    Output : 9



    Your Task:  
    You don't need to read input or print anything. Your task is to complete the function pairWithMaxSum() which takes the array Arr[] and its size N as inputs and returns the maximum sum of smallest and second smallest elements chosen from all possible subarrays.

    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(1)


*/


function maxSubArraySumOfTwoSmallstNumber() {

    const mx = Integer.MIN_VALUE;
        
    for(let i=1; i<N; i++) {
        mx = Math.max(mx, arr[i-1] + arr[i]);
    }
    
    return mx;
}


