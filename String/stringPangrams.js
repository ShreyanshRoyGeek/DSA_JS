
function isStringPangrams(str) {  // 0(n)

    str = str.toLowerCase()
    // str = str.split("")

    let countArr = new Array(26).fill(false)

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= 'a' && str[i] <= 'z') {
            let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0)
            countArr[index] = true
        }

    }

    // console.log(countArr)

    // console.log("a".charCodeAt(0)) //--> 97
    // console.log("z".charCodeAt(0)) //--> 122

    for (let k = 0; k < countArr.length; k++) {

        if (countArr[k] == false) {
            console.log("String is not pangrams")
            return false
        }
    }

    console.log("String is pangrams")
    return true

}


function isStringPangramII(str) { // 0(nlogn)

    const set = new Set()

    for (let i=0; i<str.length; i++) {

        if (str[i] >= 'a' && str[i] <= 'z') {
            set.add(str[i])
        }
    }

    if (set.size == 26) {
        console.log("String is pangrams")
        return true
    }
    else {
        console.log("String is not pangrams")
        return false
    }

}



let driverStr = "The quick brown fox jumps over the lazy dogg"
isStringPangramII(driverStr)

