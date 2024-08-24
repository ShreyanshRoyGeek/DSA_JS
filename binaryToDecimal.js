
function printBinaryToDecimal(binaryNum) {

    let decimal = 0
    let power = 0

    while(binaryNum > 0){

        const lastDigit = binaryNum % 10

        decimal += lastDigit *  Math.pow(2, power)

        power++
    
        binaryNum = Math.floor(binaryNum / 10)
    }

    console.log("decimal equivalent", decimal)

}

function printDecimalToBinary(decimalNum) {

    let binary = 0
    let power = 0

    while(decimalNum > 0) {

        const reminder = decimalNum % 2

        binary +=  reminder * Math.pow(10, power)

        power++

        decimalNum = Math.floor(decimalNum / 2)
    }

    console.log("binary equivalent is ", binary)
}

   
function decimalToBinary(N) { 

    let binary = ''; 
  
    while (N > 0) { 
        binary = (N % 2) + binary; 
        N = Math.floor(N / 2); 
    } 
  
    return binary; 
} 


// printBinaryToDecimal(10101001)

// printDecimalToBinary(169)


var binary = "10101001";
var decimal = parseInt(binary, 2);
console.log(decimal);


// let num = 169
// const  binary = num.toString(2)
// console.log(binary)


// input --> 10101001 / Output --> 169

// input --> 169 / Output --> 10101001
