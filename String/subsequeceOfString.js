/*

    Check for subsequence --> String (Basic)

    Given two strings A and B, find if A is a subsequence of B.


    Input:
    A = AXY 
    B = YADXCP
    Output: 0 
    Explanation: A is not a subsequence of B
    as 'Y' appears before 'A'.


    Input:
    A = gksrek
    B = geeksforgeeks
    Output: 1
    Explanation: A is a subsequence of B.


    Your Task:  
    You dont need to read input or print anything. 
    Complete the function isSubSequence() which takes A and B as input parameters and returns a boolean value denoting if A is a subsequence of B or not. 


    Expected Time Complexity: O(N) where N is length of string B.
    Expected Auxiliary Space: O(1)


*/


function checkSubSequence(str1, str2) {

    let i=0
    let j=0

    while(i<str1.length && j<str2.length) {
        if(str1[i] == str2[j]) {
            i++
            j++
        }
        else {
            j++
        }
    }

    return i==str1.length

}

let str1 = 'AXY'
let str2 = 'YADXCP'

const res = checkSubSequence(str1, str2)
console.log('res', res)

