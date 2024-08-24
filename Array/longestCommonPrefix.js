
function longestCommonPrefix(str) {

    function compareTwoString(str1, str2) {
 
        let minLenght = Math.min(str1.length, str2.length)

        let commonPrefix = ""
        for(let i=0; i<minLenght; i++) {

            if(str1[i] !==  str2[i]) {
                return commonPrefix
            }
            else {
                commonPrefix += str1[i]
            }
        }

        return commonPrefix
    }


    // str = str.split(' ')
    let longestCommonPrefix = str[0]

    for(let i=0; i<str.length; i++) {
        longestCommonPrefix = compareTwoString(longestCommonPrefix, str[i])
    }

    if(longestCommonPrefix.length > 0) {
        return longestCommonPrefix
    }
    else {
        return -1
    }

     
}

const driverArr = ["geeksforgeeks", "geeks", "geek", "geezer"]

// const driverArr = ["hello", "world"]

const res = longestCommonPrefix(driverArr)

console.log(res)

