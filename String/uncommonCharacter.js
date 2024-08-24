/*


Input:
A = geeksforgeeks
B = geeksquiz
Output: fioqruz
Explanation: 
The characters 'f', 'i', 'o', 'q', 'r', 'u','z' 
are either present in A or B, but not in both.


Input:
A = characters
B = alphabets
Output: bclpr
Explanation: The characters 'b','c','l','p','r' 
are either present in A or B, but not in both.


*/



function unCommonCharacters(str1, str2) {

    let countChar = Array(26).fill(0)

    let uniqueElem =  ""

    for(let i=0; i<str1.length; i++) {
        countChar[str1[i].charCodeAt() - 97]++
    }

    for(let i=0; i<str2.length; i++) {
        countChar[str2[i].charCodeAt() - 97]++
    }

    // console.log(countChar)


    for(let j=0; j<countChar.length; j++) {
        if(countChar[j] == 1) {
            uniqueElem += countChar[j]
        }
    }

    console.log(uniqueElem)

}



function unCommonCharactersII(str1, str2) {

    let unCommonEleArr = []

    let unCommonStr = ""

    for(let i=0; i<str1.length; i++) {

        if(str2.indexOf(str1[i]) == -1) {

            // if(unCommonEleArr.indexOf(str1[i]) == -1) {

            // console.log(unCommonStr.indexOf(str1[i]) )
                
            if(unCommonStr.indexOf(str1[i]) === -1) {
                    
                // unCommonEleArr.push(str1[i])
                unCommonStr += str1[i]

            }

        }
    }

    
    for(let i=0; i<str2.length; i++) {

        if(str1.indexOf(str2[i]) == -1) {

            // if(unCommonEleArr.indexOf(str2[i]) == -1) {

            if(unCommonStr.indexOf(str2[i]) == -1) {

                // unCommonEleArr.push(str2[i])
                unCommonStr += str2[i]


            }

        }
    }

    // console.log(unCommonEleArr.sort().join(''))

    if(unCommonStr.length > 0) {
        console.log(unCommonStr.split('').sort().join(''))
    }
    else {
        return -1
    }


}


let str1 = "characters"
let str2 = "alphabets"
// Output: bclpr

let A = "geeksforgeeks"
let B = "geeksquiz"
// Output: fioqruz



let C = "characters"
let D = "alphabets"
// Output: bclpr



let E = "gpkgpseigjxnhdiqjxrkaytgeovzbuifirmnsknopoqjycdoycoytsnbusfsqsawhtatgkygsbmdxkxffdkbznm"

let F = "dtswwbjllbmegzoyyofptaukxjjhlpjcvysotchqzlljkraalcizxppnooukfpmnpvbindkelgzdyeenrncflcbcwasf"

unCommonCharactersII(E, F)  


