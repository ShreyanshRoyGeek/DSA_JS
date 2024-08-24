/*

Find first repeated character - 

Input: S="geeksforgeeks"
Output: e
Explanation: 'e' repeats at third position.


Input: S="hellogeeks"
Output: l
Explanation: 'l' repeats at fourth position.


Input: S="abc"
Output: -1
Explanation: There is no repeated character.

*/


function findFirstRepeatedCharacter(s) {

    let tempStr = ""
    
    for(let i=0; i<s.length; i++) {
        
        if(tempStr.indexOf(s[i]) == -1) {
            tempStr += s[i]
        }
        else {
            return s[i]
        }
    }
    
    // if(tempStr.length == s.length) {
        return -1
    // }
    
}

function findFirstRepeatedCharacterInSortedString(s) {

    // console.log("Str", s)

    let countArrLength = 26
    let countArr = new Array(countArrLength).fill(0)

    for(let i=0; i<s.length; i++) {
        countArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    // console.log(countArr)

    for(let i=0; i<countArrLength; i++) {
        if(countArr[i] > 1) {
            return String.fromCharCode(i + 'a'.charCodeAt())
        }
    }

    return -1

}


let driverStr = "geeksforgeeks"

let driverStr1 = "hellogeeks"

let driverStr2 = "abc"


console.log(findFirstRepeatedCharacter(driverStr2))


