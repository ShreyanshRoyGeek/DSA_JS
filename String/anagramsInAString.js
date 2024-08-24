
/*
    Anagram of String --> String (Basic)

    Given two strings S1 and S2 in lowercase, the task is to make them anagram. 
    The only allowed operation is to remove a character from any string. 
    Find the minimum number of characters to be deleted to make both the strings anagram. 
    Two strings are called anagram of each other if one of them can be converted into another by rearranging its letters.


    Input:
    S1 = bcadeh
    S2 = hea
    Output: 3
    Explanation: We need to remove b, c
    and d from S1.

    Input:
    S1 = cddgk
    S2 = gcd
    Output: 2
    Explanation: We need to remove d and
    k from S1.


    Your Task:
    Complete the function remAnagram() which takes two strings S1, S2 as input parameter, and returns minimum characters needs to be deleted.

    Expected Time Complexity: O(max(|S1|, |S2|)), where |S| = length of string S.
    Expected Auxiliary Space: O(26)

*/


function remAnagrams(str1, str2) {

    let table1 = {}
    let table2 = {}
    
    for(let i=0; i<str1.length; i++) {
        table1[str1[i]] = ( table1[str1[i]] || 0 ) +1
    }
    
    for(let i=0; i<str2.length; i++) {
        table2[str2[i]] = ( table2[str2[i]] || 0 ) +1
    }
    
    let count = 0
    
    for(let ele in table1) {
        if(!table2[ele] || table2[ele] == 0) {
            count += table1[ele]
            table1[ele] = 0
        }
        else if(table2[ele] > table1[ele]) {
            count  += table2[ele] - table1[ele]
            table2[ele] = table1[ele]
        }
    }
    
    for(let ele in table2) {
        if(!table1[ele] || table1[ele] == 0) {
            count += table2[ele]
            table2[ele] = 0
        }
        else if(table1[ele] > table2[ele]) {
            count  += table1[ele] - table2[ele]
            table1[ele] = table2[ele]
        }
    }
    
    return count
    
}


let str1 = 'bcadeh'
let str2 = 'hea'
const res = remAnagrams(str1, str2)

console.log('res', res)


