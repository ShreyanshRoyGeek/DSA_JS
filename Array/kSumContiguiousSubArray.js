
function solve(arr, target) {
    
    for(let i=0; i<arr.length; i++) {
        
        let sum = 0
        let j = i

        while(j<arr.length) {

            sum += arr[j]
            
            if(sum == target) {
                console.log('worked')
                return [i, j]
            }

            j++
        }

    }
    
    return -1
}

const arr = [1,2,3,4,5]
let target = 9

const res = solve(arr, target)
console.log('res', res)

