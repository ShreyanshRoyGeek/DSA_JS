
function isStringRotationOfEachOther(str1, str2) {

    let countArr1 = new Array(26).fill(0)
    let countArr2 = new Array(26).fill(0)

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    for(let i=0; i<str1.length; i++) {
        countArr1[str1[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    for(let i=0; i<str2.length; i++) {
        countArr2[str2[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    // console.log('a'.charCodeAt())
    // console.log(String.fromCharCode(97))

    // console.log(countArr1)
    // console.log(countArr2)

    for(let j=0; j<countArr1.length; j++) {
        if(countArr1[j] !== countArr2[j]){
            return false
        }
    }

    return true

}


function isStringRotationOfEachOtherII(str1, str2) {

    let tempStr = str1 + str1

    if(tempStr.includes(str2)) {
        return true
    }

    return false
}



let str1 = "geeksforgeeks"
let str2 = "forgeeksgeeks"

str1 = "mightandmagic"
str2 = "andmagicmigth"

let res = isStringRotationOfEachOther(str1, str2)
console.log('res', res)

