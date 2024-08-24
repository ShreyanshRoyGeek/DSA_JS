
function subArray(arr) {

    let str = ""

    let count = 0

    let max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY
    
    for(let k=0; k<arr.length; k++) {

        for(let i=0; i<arr.length; i++) {
    
            let ans = []
            let sum = 0

            for(let j=k; j<=i; j++){
    
                // str += arr[j]

                /*if(k==0 && j==i) {
                    continue
                }*/

                ans.push(arr[j])
                sum += arr[j]
    
            }

            if(ans.length > 0){

                console.log(ans)

                if(sum > max){
                    max = sum
                }

                if(sum < min){
                    min = sum
                }

                // console.log("Sum is", sum)

                count++
            }
    
            // str += "\n" 
            
        }

    }

    console.log("Total Number of SubArray is", count)

    console.log("The minimum sum is", min)

    console.log("The maximum sum is", max)

}


let driverArr = [1,2,3,4]
// let driverArr = [1,2,3,4,5,6,7,8]

subArray(driverArr)

