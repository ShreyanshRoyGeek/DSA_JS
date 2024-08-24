
function isStringPalindrome(str) {

    let start = 0, end = str.length-1 

    while(start < end) {

        if(str[start] !== str[end]){

            console.log("String is not plaindrome")
            return 0
        }
        start++, end--

    }

    console.log("String is palindrome")
    return 1
}


function isStringPalindromeII(str) {
    // Using JS inbuilt fn


    let modifiedStr = str.split("")

    modifiedStr = modifiedStr.reverse().join("")

    if(str == modifiedStr) {
        console.log("String is palindrome")
    }

    else {
        console.log("String is not  palindrome")
    }

}

let driverStr = "hellolleh"
// let driverStr = "reacer"

// isStringPalindrome(driverStr)

isStringPalindromeII(driverStr)