function findMaximum(arr, n) {

    let maxElem = Number.NEGATIVE_INFINITY
        
    for(let i=0; i<n; i++) {
        
        if(arr[i+1]) {
            
            if(arr[i+1] >arr[i]) {
                
                if(arr[i+1] > maxElem) {
                    
                    maxElem = arr[i+1]
                }
            } 
            else {
                break
            }
        }
        else {
            break
        }
    }
    
    return maxElem
}



function findMaximumII(arr) { // 0(logn)

    // binary search implementation

    let start = 0, end = arr.length - 1

    while(arr.length) {

        let mid = Math.floor((start + end) / 2)

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]  ) {
            return arr[mid]
        }

        else if(arr[mid] > arr[mid - 1]) {
            start = mid + 1
        }

        else{
            end = mid - 1
        }
    }

}


// Example usage:
const arr = [1, 3, 5, 7, 9, 8, 6, 4, 2];
console.log("Maximum element:", findMaximum(arr, arr.length)); // Output: 9

