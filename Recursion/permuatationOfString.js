/*
    String Permutations

    Recursion  & Backtracking --> String (Hard)

    Given a string S. The task is to find all permutations (need not be different) of a given string.

    Note: return the permutations in lexicographically increasing order.    

    Example 1:
    Input:
    S = AAA
    Output: AAA AAA AAA AAA AAA AAA
    Explanation: There are total 6 permutations, as given in the output.


    Example 2:
    Input:
    S = ABSG
    Output: ABGS ABSG AGBS AGSB ASBG ASGB
    BAGS BASG BGAS BGSA BSAG BSGA GABS
    GASB GBAS GBSA GSAB GSBA SABG SAGB
    SBAG SBGA SGAB SGBA
    Explanation: There are total 24 permutations, as given in the output.


    Your Task:
    This is a function problem. You only need to complete the function permutation that takes S as parameter and returns the list of permutations in lexicographically increasing order. The newline is automatically added by driver code.
    
    Constraints:
    1 ≤ size of string ≤ 5
    
    Expected Time Complexity: O(N * N!), N = length of string.
    Expected Auxiliary Space: O(N!)

*/


function solve(str, ans, indx) {

    //base case
    if(indx >= str.length) {
        
        str = str.join('')
        ans.push([str])
        return
    }
    
    for(let j=indx; j<str.length; j++) {
        
        swap(indx, j, str)
        solve(str, ans, indx+1)
      
        //backtrack
        swap(indx, j, str)
        
    }
    
}   
    
    
function swap(ind1, ind2, str) {

    let temp = str[ind1]
    str[ind1] = str[ind2]
    str[ind2] = temp

}


function premutation(str) {

    str = str.split('').sort()
            
    let ans = []
    let indx = 0
    solve(str, ans, indx)

    /*
    ans.forEach(innerArray => innerArray.sort((a,b) =>  a-b))
    
    // Laxical nested array sorting
    ans.sort((a,b) => {

        for(let i=0; i<Math.min(a.length, b.length); i++) {
            if(a[i] !== b[i]) {
                return a[i] - b[i]
            }
        }
        return a.length - b.length
    })
    */
    
    return ans.sort()

}


const string = "ABSG"
const res = premutation(string)
console.log('res', res)


