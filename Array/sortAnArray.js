
function sortAnArray(arr) {


    for(let i=0; i< arr.length; i++) {

        for(let j=i+1; j< arr.length; j++) {

            if(arr[i] > arr[j]) {

                let temp = arr[j];
                arr[j] =  arr[i];
                arr[i] = temp

            }
        }
    }
    
    console.log(arr)

}



function bubbleSort(arr) {

    let sorted = false;

    while (!sorted) {
        
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                sorted = false; // Set sorted to false to continue looping
            }
        }
    }
    return arr;
}

const numbers = [5, 3, 8, 1, 4];
console.log("Sorted numbers:", bubbleSort(numbers));



// let driverArr  = [0, 2, 1, 2, 0, 0, 0, 2, 1, 2 , 0 , 1, 2 , 0]
// let driverArr = [40, 30, 12, 25]
let driverArr = [34, 3, 1, 25, 54, 12, 89, 5, 76, 789]

// sortAnArray(driverArr)


