
function removeDulicate(arr) {

    let tempArr = arr

    let nonDuplicateArr = []

    for(let i=0; i<arr.length; i++) {

        if(arr[i] !== true) {

            let count = 1
            
            for(let j=i+1; j<arr.length; j++) {
    
                if(arr[i] == arr[j]) {
    
                    count ++
                    arr[j] = true
    
                }
            }

            nonDuplicateArr.push(arr[i])

            console.log(arr[i] +" ----> "+ count)
        }
    }

    console.log(nonDuplicateArr)
}


function removeDuplicateUsingIndexOf(arr) {

    let tempArr = []

    for(let i=0; i<arr.length; i++) {

        if(tempArr.indexOf(arr[i]) == -1) {
            tempArr.push(arr[i])
        }
    }

    console.log(tempArr)

}


function removeDuplicateUsingFilter(arr) {
    
    // const tempArr =  arr.filter((value, index) => arr.indexOf(value) === index)

    const tempArr =  arr.filter((value, index) => {

        // console.log("index", index)
        // console.log("arr.indexOf(value)", arr.indexOf(value))
        // console.log(arr.indexOf(value) === index)
        // console.log("value", value)

        return arr.indexOf(value) === index
    
    })

    console.log(tempArr)
}


function removeDuplicateUsingReduce(arr) {

    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);

}


function removeDuplicateUsingHashTable(arr) {  // 0(n) solution
  
    const hashTable = {} // hash table - JS Object
    let resultArr = []

    for(let i=0; i<arr.length; i++) {

        if(!hashTable[arr[i]]) {
            resultArr.push(arr[i])
            hashTable[arr[i]] = true
        }

    }

    console.log(resultArr)
}



function countElementsInAnArray(arr) { // 0(n) solution

    const hashTable = {}

    for(let i=0; i<arr.length; i++) {
        hashTable[arr[i]] = (hashTable[arr[i]] || 0) + 1
    }

    console.log(hashTable)

    for( key in hashTable ){
        console.log("Element:"+ key + ", Count " + hashTable[key])
    }
    
}



function removeDuplicatesStringWithSortedResult(str) {
    // count arr approach

    str = "zvvo"
    const no_of_characters = 26

    let tempStr = ""
        
    let countArr = new Array(no_of_characters).fill(0)
        
    for(let i=0; i<str.length; i++) {

        countArr[str[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    
    for(let j=0; j<no_of_characters; j++) {
        
        if(countArr[j] > 0) {
            tempStr += (String.fromCharCode(j + 'a'.charCodeAt()))
        }
    }
    
    return tempStr // gives result in sorted order

}



// let driverArr = [1, 2, 3, 4, 1, 2, 4, 5, 6, 5, 7, 6, 6]
// let driverArr = [5, 6, 5, 7, 6, 6]
let driverArr = [7, 5, 5, 7, 6, 6]

// removeDuplicateUsingHashTable(driverArr)

removeDuplicateUsingHashTable(driverArr)

// console.log(removeDuplicatesStringWithSortedResult())

