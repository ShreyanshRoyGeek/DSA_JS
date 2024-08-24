/*
    Remove common characters and concatenate --> (String) --> Basic
 
    Given two strings s1 and s2. Modify both the strings such that all the common characters of s1 and s2 are to be removed and the uncommon characters of s1 and s2 are to be concatenated.
    Note: If all characters are removed print -1.


    Input:
    s1 = aacdb
    s2 = gafd
    Output: cbgf
    Explanation: The common characters of s1
    and s2 are: a, d. The uncommon characters
    of s1 and s2 are c, b, g and f. Thus the
    modified string with uncommon characters
    concatenated is cbgf.


    Input:
    s1 = abcs
    s2 = cxzca
    Output: bsxz
    Explanation: The common characters of s1
    and s2 are: a,c. The uncommon characters
    of s1 and s2 are b,s,x and z. Thus the
    modified string with uncommon characters
    concatenated is bsxz.


    Your Task:
    The task is to complete the function concatenatedString() which removes the common characters, concatenates, and returns the string. If all characters are removed then return -1.


    Expected Time Complexity: O(N).
    Expected Auxiliary Space: O(Number of distinct characters).
    Note: N = |Length of Strings|


    Constraints: 
    1 <= |Length of Strings| <= 104


*/


function removeCommCharAndConcentrate(s1, s2) {

    let tempStr = ''

    for (let i = 0; i < s1.length; i++) {

        if (s2.indexOf(s1[i]) == -1) {

            tempStr += s1[i]
        }
    }

    for (let i = 0; i < s2.length; i++) {

        if (s1.indexOf(s2[i]) == -1) {

            tempStr += s2[i]
        }
    }

    return tempStr

}



function removeCommCharAndConcentrateII(s1, s2) {  // O(n) --> Order not maintained!

    let countArr = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++) {
        countArr[s1[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    for(let j=0; j<s2.length; j++) {
        countArr[s2[j].charCodeAt() - 'a'.charCodeAt()]++
    }

    // console.log('countArr', countArr)

    let tempStr = ''

    for(let i=0; i<countArr.length; i++) {
        if(countArr[i] == 1) {
            let str = String.fromCharCode(i + 'a'.charCodeAt())
            tempStr += str
        }
    }

    return tempStr

}


function removeCommCharAndConcentrateIII(s1, s2) {

    const map = new Map()

    for(let i=0; i<s2.length; i++) {
        map.set(s2[i], 2)
    }

    let res = ''
    for(let i=0; i<s1.length; i++) {
        if(map.has(s1[i])) {
            map.set(s1[i], 1)
        }
        else {
            res += s1[i]
        }
    }

    let isBelongingPresent = false
    for(let i=0; i<s2.length; i++) {
        if(map.get(s2[i]) !== 1) {
            isBelongingPresent = true
            res += s2[i]
        }
    }

    if(isBelongingPresent == false) {
        return -1
    }

    return res
}



function removeCommCharAndConcentrateIV(s1, s2) {

    let table = {}

    for(let i=0; i<s1.length; i++) {
        table[s1[i]] =  ( table[s1[i]] || 0 ) + 1
    }

    for(let i=0; i<s2.length; i++) {
        table[s2[i]] = ( table[s2[i]] || 0 ) + 1
    }

    let res = ''
    let isBelongingPresent = false

    for(let ele in table) {
        if(table[ele] == 1) {
            isBelongingPresent = true
            res += ele
        }
    }

    if(!isBelongingPresent) {
        return -1
    }

    return res
}



let str1 = 'aacdb'
let str2 = 'gafd'
const res = removeCommCharAndConcentrateIV(str1, str2)
console.log('res', res)

// op = 'cbgf'


