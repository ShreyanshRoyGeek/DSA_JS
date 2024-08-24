
let a = 5 , b = 6

// console.log("Binary And", a & b)
// console.log("Binary OR", a | b)
// console.log("Binary XOR", a ^ b)

// console.log("Complement of a is", ~ b )

// console.log("Left shift operator", 5 << 2) // value = a * 2^b

// console.log("Right shift operator", 6 >> 1) // vallue = a / 2^b


function getIthBit(num, i) {

    const bitmask = 1 << i

    if((num & bitmask) == 0) {
        return 0
    }
    else {
        return 1
    }

}


// const res = getIthBit(10, 3)
// console.log(res)

function setIthBit(num, i) {

    let bitmask = 1<<i
    return num | bitmask
}


// const res = setIthBit(10, 2)
// console.log(res)


function clearIthBit(num, i) {

    let bitMask = ~ 1 << i
    return num & bitMask
    
}

const res = clearIthBit(10, 1)
console.log(res)

