// concat polyfill

Array.prototype.myConcat = function() {

    // callback, context, initialValue, arguments

    const argumentBunch = arguments
    let inputArr = this

    // console.log(argumentBunch)
    // console.log(argumentBunch.length)
    // console.log(JSON.stringify(argumentBunch))

    for(let i=0; i<argumentBunch.length; i++) {

        if(Array.isArray(argumentBunch[i])) {
            pushValues(inputArr, argumentBunch[i])
        }
        else {
            inputArr.push(argumentBunch[i])
        }
    }


    function pushValues(src, dest) {
        
        for(let i=0; i<dest.length; i++) {
            src.push(dest[i])
        }
        return src
    }

    return inputArr
}




const arr1 = [1,2,3]
const arr2 = [4,5,6]

const value1 = 'y' // String
const value2 = () => {} // Function
const value3 = undefined // Undefined
const value4 = null // Null


const res1 = arr1.concat(arr2, value1, value2, value3, value4)
const res2 = arr1.myConcat(arr2, value1, value2, value3, value4)

console.log(res1)
console.log(res2)
