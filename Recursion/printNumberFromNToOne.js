
let str = ""
function printNumberFromNToOne(n) {

    if(n == 1) {
        str += " " + n
        return
    }
    str += " " + n
    printNumberFromNToOne(n-1)

}


// printNumberFromNToOne(10)
// console.log("str", str)


function printNumberFromOneToN(n) {

    if(n==1) {
        console.log(n)
        return 
    }

    printNumberFromOneToN(n-1)
    console.log(n)

}


printNumberFromOneToN(10)

