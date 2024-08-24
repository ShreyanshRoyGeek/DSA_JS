
// Map polyfill
Array.prototype.mymap = function(callback) {

    const resultArr = []

    for(let index=0; index < this.length; index++) {
        resultArr.push(callback(this[index], index, this))
    }

    return resultArr

}

const sample = [1, 2, 3]

let output = sample.mymap(function(val, index, array) {
    return val*2
})

// console.log(output)



Array.prototype.myMapCustom = function(callback) {

    let resultArr = []

    for(let i=0; i<this.length; i++) {
        resultArr.push(callback(this[i], i, this))
    }

    return resultArr
}


Array.prototype.myMapNew = function(callback) {

    let tempArr = []

    for(let i=0; i<this.length; i++) {
        tempArr.push(callback(this[i], i, this))
    }

    return tempArr
}



const sampleNew = [1, 2, 3, [6, 8], 10]

let outputNew = sampleNew.myMapNew((elem, index, arr) => {

    if(Array.isArray(elem)) {

        let newArr =  elem.map(nestedElem =>  {
            return nestedElem + 2
        })

        return newArr

    }

    return elem + 2
})

console.log(outputNew)




Array.prototype.myFilterNew = function(callback) {

    let output = []

    for(let i=0; i<array.length; i++) {

        if(callback(this[i])) {
            output.push(this[i])
        }
    }

    return output
}



Array.prototype.myReduceNew = function(callback, initialValue) {

    let accumulator = initialValue ? initialValue : this[0]

    for(let i=0; i<this.length; i++) {

        accumulator = callback(accumulator , this[i], this)
    }

    return accumulator
}



