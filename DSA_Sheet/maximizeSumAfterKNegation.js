
function maximizeSumAfterKNegation(arr, k) {


    arr = arr.sort((a, b) => a-b)
        
    let sum = 0
    
    for(let i=0; i<n; i++) {

        if(k > 0) {
            if(arr[i] < 0) {
                
                arr[i] = -1 * arr[i]
                k--
            }
        }
    }
    
    arr = arr.sort((a, b) => a-b)
    
    
    if(k > 0 && k%2 == 1) {
        arr[0] = -arr[0]
    }
    
    
    for(let i=0; i<n; i++) {
        sum += arr[i]
    }
    
    return sum

}



function maximizeSumAfterKNegationII(arr, k) {

    arr = arr.sort((a, b) => a-b)
        
    let sum = 0
    
    
    for(let i=0; i<n; i++) {
       
        if(k > 0) {
            if(arr[i] < 0) {
                
                arr[i] = -1 * arr[i]
                k--
            }
        }
        
        sum += arr[i]
    }
    
    let minElem = Infinity
    
    if(k > 0 && k%2 == 1) {

        arr[0] = -arr[0]
        
        for(let i=0; i<n; i++) {
            minElem = Math.min(arr[i], minElem)
            
        }
        sum = sum - minElem
        
        sum = sum - minElem
    }
    
    return sum

}