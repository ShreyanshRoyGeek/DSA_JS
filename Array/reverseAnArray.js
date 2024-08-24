
function reverseAnArray(arr) {

    console.log("Original array", arr)

    let start = 0, end = arr.length - 1 

    while(start <= end){
        
        
        if(start == end){
            console.log("Reversed array", arr)
            return 1
        }

        let temp = 0
    
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++, end--
        
    }

    // for(let i=start; i<=end; i++) {
    //     for(let j=1; j)
    // }

    console.log("Reversed array", arr)

}

reverseAnArray([3, 5, 7, 9, 2, 6, 7, 18, 34, 26])