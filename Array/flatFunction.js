// flat polyfill
Array.prototype.myFlat = function() {

    let output = []

    function flattenArray(arr) {

        for(let i=0; i<arr.length; i++) {

            if(Array.isArray(arr[i])) {
                flattenArray(arr[i])
            }
            else {
                output.push(arr[i])
            }
        }
        return output
    }

    let resultArr = flattenArray(this)
    return resultArr

}


function flatCustom (arr) {

    let output = []

    function flattenArray(arr) {

        for (let i = 0; i < arr.length; i++) { 
            
            if (Array.isArray(arr[i])) {
                flattenArray(arr[i]);
            } 
            else {
                output.push(arr[i]);
            }
        }

        return output;
    }

    const result =  flattenArray(arr)
    return result

}


function flatFunctionIterative(arr) {

    let stack = [...arr]

    let flattensArr = []

    while(stack.length) {

        const input = stack.pop()

        if(Array.isArray(input)) {
            stack.push(...input)
        }
        else {
            flattensArr.push(input)
        }

    }
    return flattensArr.reverse()
}


let nestedArray = [1, [2, 3], [[]], [4, [5]], 6];

const numbers = [['1', '2'], ['3', '4', ['5', ['6'], '7']]]

// const arr = flatCustom(nestedArray)
// console.log(arr)


// const arr = nestedArray.myFlat()
// console.log(arr)


const arrnew = flatFunctionIterative(nestedArray)
console.log(arrnew)



