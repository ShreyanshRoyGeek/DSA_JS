// reduce polyfill
Array.prototype.myreduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    const array = this;
    const length = array.length;

    let accumulator = initialValue !== undefined ? initialValue : array[0];
    
    for (let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
        // if (i in array) {
            accumulator = callback.call(undefined, accumulator, array[i], i, array);
        // }
    }
    return accumulator;
};



Array.prototype.myReduce = function(callback, initialValue){

    let accumulator = initialValue !== null ? initialValue : this[0]

    for(let i=0; i<this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }

    return accumulator

}



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myCustomNewReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


