
// Filter polyfill
Array.prototype.customFilter = function(callback, context) {

    let filteredArr = []

    for(let i=0; i<this.length; i++) {

        if(callback.call(context, this[i], i, this)) {
            filteredArr.push(this[i])
        }

    }

    return filteredArr
}



Array.prototype.myFilter = function(callback) {

    let output = []

    for(let i=0; i<this.length; i++) {

        if(callback(this[i])){ // true or false -->  will check condition from callback about current element
            output.push(this[i])
        }

    }

    return output
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const filteredArr = arr.myFilter(ele => {
    return ele % 2 == 0
})

console.log(filteredArr)

