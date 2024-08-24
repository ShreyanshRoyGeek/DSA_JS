
function isStringAnagrams(str1, str2) { // 0(nlogn)

    if (str1.length != str2.length) {
        console.log("Strings are not in anagrams")
        return 0
    }

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    str1Arr = str1.split("")
    str1Arr = sortCustom(str1Arr)

    str2Arr = str2.split("").sort()


    str1 = str1Arr.join("")
    str2 = str2Arr.join("")

    console.log(str1Arr)
    console.log(str2Arr)


    if (str1 == str2) {
        console.log("Strings are anagrams")
    }
    else {
        console.log("Strings are not in anagrams")
    }

}


function sortCustom(strArr) { /* 0(n^2) - complexity -> many unnecessarily swapping is happening */

    for (let i = 0; i < strArr.length; i++) {

        for (let j = i + 1; j < strArr.length; j++) {

            if (strArr[i] > strArr[j]) {

                let temp = strArr[i]
                strArr[i] = strArr[j]
                strArr[j] = temp
            }
        }
    }
    return strArr
}


function areAnagram(str1, str2) { // 0(n)

    let NO_OF_CHARS = 256;

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()


    console.log("a".charCodeAt())
    console.log(String.fromCharCode(97))


    // Create 2 count arrays and initialize
    // all values as 0
    let count1 = new Array(NO_OF_CHARS).fill(0);
    let count2 = new Array(NO_OF_CHARS).fill(0);

    // for (let i = 0; i < NO_OF_CHARS; i++) {
    //     count1[i] = 0;
    //     count2[i] = 0;
    // }

    let i;

    // For each character in input strings,
    // increment count in the corresponding
    // count array

    for (i = 0; i < str1.length && i < str2.length; i++) {

        count1[str1[i].charCodeAt(0)]++;
        count2[str2[i].charCodeAt(0)]++;
    }

    // If both strings are of different length.
    // Removing this condition will make the 
    // program fail for strings like "aaca" 
    // and "aca"
    if (str1.length != str2.length) {
        console.log("Strings are not anagrams")
        return false;
    }

    // console.log(count1)
    // console.log(count2)

    // Compare count arrays
    for (i = 0; i < NO_OF_CHARS; i++) {

        if (count1[i] != count2[i]) {
            console.log("Strings are not anagrams")
            return false;
        }

    }

    console.log("Strings are anagrams")
    return true;

}


// let driverStr1 = "listen"
// let driverStr2 = "silent"

let driverStr1 = "Heart"
let driverStr2 = "Earth"

// isStringAnagrams(driverStr1, driverStr2)

areAnagram(driverStr1, driverStr2)

