

function countLowerCaseLetters(str) {

    let count = 0
    for(let i=0; i<str.length; i++) {
        if(str[i] !== str[i].toUpperCase()) {
            count++
        }
    }

    return count
}


let driverStr = "Hello World!, This is a Test String."
const res = countLowerCaseLetters(driverStr)

console.log(res)



