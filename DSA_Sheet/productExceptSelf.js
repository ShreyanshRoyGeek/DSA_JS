
/*


Product Except Self (Easy) 

Given an array nums[] of size n, construct a Product Array P (of same size n) 
such that P[i] is equal to the product of all the elements of nums except nums[i].


Input:
n = 5
nums[] = {10, 3, 5, 6, 2}
Output:
180 600 360 300 900
Explanation: 
For i=0, P[i] = 3*5*6*2 = 180.
For i=1, P[i] = 10*5*6*2 = 600.
For i=2, P[i] = 10*3*6*2 = 360.
For i=3, P[i] = 10*3*5*2 = 300.
For i=4, P[i] = 10*3*5*6 = 900.



Input:
n = 2
nums[] = {12,0}
Output:
0 12



Input :
n = 1
nums[] = {11}
Output:
1 
 


*/


function productExceptSelf(arr) {

    // Output logic --> 
    // result[i] = multiply of all left elements * multiply of all right elements


    // For single element array result is 1 
    if(arr.length == 1) {
        return [1]
    }

    console.log("arr", arr)

    let tempArr = new Array(arr.length).fill(0)
    
    let leftProdArr = new Array(arr.length).fill(0)

    let rightProdArr = new Array(arr.length).fill(0)

    leftProdArr[0] = arr[0]

    for(let i=1; i<arr.length; i++) {

        leftProdArr[i] = leftProdArr[i-1] * arr[i]
    }


    rightProdArr[arr.length -1] = arr[arr.length -1]

    for(let j=arr.length-2; j>=0; j--) {

        rightProdArr[j] = rightProdArr[j+1] * arr[j]
    }

    console.log("leftProdArr", leftProdArr)

    console.log("rightProdArr", rightProdArr)


    tempArr[0] = rightProdArr[1]
    tempArr[tempArr.length -1] = leftProdArr[tempArr.length -2]

    for(let k=1; k<tempArr.length -1; k++) {

        tempArr[k] = leftProdArr[k-1] * rightProdArr[k+1]
    }

    // console.log("tempArr", tempArr)

    return tempArr

}


let diverArr = [3, 5, 2, 6]
const res = productExceptSelf(diverArr)
console.log("res", res)

// leftProdArr = [3, 15, 30, 180]

// rightProdArr = [180, 60, 12, 6]

// resultArr = [60, 36, 90, 30]

