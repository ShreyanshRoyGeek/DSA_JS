
function numberIsEvenOrOddUsingBitwise(num) {

    let bitMask = 1

    if((num & bitMask) == 0) {
        console.log("Number is Even")
    }

    if((num & bitMask) == 1) {
        console.log("Number is odd")
    }

}

numberIsEvenOrOddUsingBitwise(14)

