
// Creating multilevel array
const numbers = [['1', '2'], ['3', '4', ['5', ['6'], '7']]]

const flatNumbers = numbers.flat(Infinity)
console.log(flatNumbers)


let nestedArray = [1, [2, 3], [[]], [4, [5]], 6];

let zeroFlat = nestedArray.flat(0);
console.log(`Zero levels flattened array: ${zeroFlat}`);



const arr = numbers.flatMap((elem, index, arr) => {

    // if(Array.isArray(elem)) {
    // }

    return elem

}) 

console.log(arr)

