
function addCharacterAtSpecifiedIndex(str1, index, str2) {

    let str1Arr = str1.split("")

    console.log(str1Arr.shift())

    console.log(str1Arr)

    let str = ""

    // slice 
    // splice
    // reverse
    // reduceRight
    // reduce
    // some

    // let str2New = str1.slice(0, index+1)

    // let str2New = str1.slice(index + 1)


    str += str1.slice(0, index+1)

    str += str2

    str += str1.slice(index+1)

    console.log(str)

}

let string1 = "GeeksGeeks"
let string2 = "for"

let index = 4

addCharacterAtSpecifiedIndex(string1, index, string2)