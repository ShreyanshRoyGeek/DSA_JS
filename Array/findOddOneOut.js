
function findOddOneOut(arr) {

    let arrTemp = arr

    for(let i=0; i<arr.length; i++) {

        if(arr[i] !== true) {
            
            let count = 1

            for(let j=i+1; j<arr.length; j++) {

                if(arr[i] == arr[j]) {
                    count++
                    arr[j] = true
                }

            }

            console.log(arr[i] + "-->" + count)
        }
    }
}

let driverArr = [1,2,3,2,3,4,5,4,5]
// findOddOneOut(driverArr)


function findOddOneOut(arr) {

    let result = 0;

    for (let num of arr) {
        result ^= num;
        console.log("result", result)
    }
    return result;

}


const numbers = [1, 2, 3, 2, 1, 4, 4];
console.log("Odd one out:", findOddOneOut(numbers)); // Output: 3


