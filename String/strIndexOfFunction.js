/*
Implement strstr


Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  locates the occurrence of the string x in the string s. 
The function returns an integer denoting the first occurrence of the string x in s (0 based indexing).

Note: You are not allowed to use inbuilt function.


Input:
s = GeeksForGeeks, x = Fr
Output: -1
Explanation: Fr is not present in the
string GeeksForGeeks as substring.


Input:
s = GeeksForGeeks, x = For
Output: 5
Explanation: For is present as substring
in GeeksForGeeks from index 5 (0 based
indexing).


Your Task:
You don't have to take any input. Just complete the strstr() function which takes two strings str, target as an input parameter. The function returns -1 if no match if found else it returns an integer denoting the first occurrence of the x in the string s.
 

Expected Time Complexity: O(|s|*|x|)
Expected Auxiliary Space: O(1)

Note : Try to solve the question in constant space complexity.


*/


function strIndexOf(str, subStr) {

    let tempStr =  ''

    for(let i=0; i<str.length; i++) {

        let k = 0

        if(str[i] == subStr[k]) {
            
            tempStr = str[i]
            
            for(let j=i+1; j<=str.length; j++) {
                
                if(tempStr == subStr) {
                    return i
                }

                if(str[j] == subStr[k+1]) {

                    tempStr += str[j]
                    k++
                }
                else {
                    break
                }

            }
        }

    }

    if(tempStr !== subStr) {
        return -1
    }

}


function maximumPossibleSubStrOfDistinctChar(str) {

    let subStr = ''
    let maxStr = ''

    for(let i=0; i<str.length; i++) {

        subStr = str[i]

        for(let j=i+1; j<str.length; j++) {

            if(subStr.indexOf(str[j]) == -1) {
                subStr += str[j]
            }
            else {
                break
            }

        }

        if(subStr.length > maxStr.length) {
            maxStr =  subStr
        }

    }

    return maxStr
}



let str = "GeeksForGeeks"
let s = "For"
// let str = "abcabcbb"
// let s = "a"

const res = strIndexOf(str, s) 
console.log('foundIndex', res)

// const res_sub = maximumPossibleSubStrOfDistinctChar(str)
// console.log('res_sub', res_sub)
// console.log('res_sub_len', res_sub.length)




