
function calculateArea(length){

    return function(breadth) {

        return function(height) {

            return length*breadth*height
        } 
    }
}

const res = calculateArea(2)(2)(2)
console.log(res)




function sum(num1) {

    return (num2) => {

        if(!num2) {
            return num1
        }
        return sum(num1 + num2)

    }


}

console.log('Sum :', sum(1)(2)(3)(4)(5)(6)(7)(8)())