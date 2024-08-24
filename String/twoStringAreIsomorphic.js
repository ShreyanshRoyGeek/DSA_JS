/*

Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.

Input:
str1 = aab
str2 = xxy
Output: 
1
Explanation: 
There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.


Input:
str1 = aab
str2 = xyz
Output: 
0
Explanation: 
There are two different characters in aab but there are three different charactersin xyz. 
So there won't be one to one mapping between str1 and str2.


*/


function twoStringAreIsomorphic(str1, str2) {

    if (str1.length !== str2.length) return 0

    let freq1 = {}
    let freq2 = {}

    for (let i = 0; i < str1.length; i++) {

        if (freq1[str1[i]] !== freq2[str2[i]]) {
            return 0;
        }

        freq1[str1[i]] = i;
        freq2[str2[i]] = i;
    }

    // console.log(freq1)
    // console.log(freq2)
    return 1;
}


let str1 = "aab"
let str2 = "xyz"

console.log(twoStringAreIsomorphic(str1, str2))


