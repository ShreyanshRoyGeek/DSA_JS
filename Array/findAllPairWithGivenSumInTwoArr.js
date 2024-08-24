/*

Find all pairs with a given sum


Input:
A[] = {1, 2, 4, 5, 7}
B[] = {5, 6, 3, 4, 8} 
X = 9 
Output: 
1 8
4 5 
5 4
Explanation:
(1, 8), (4, 5), (5, 4) are the
pairs which sum to 9.



Input:
A[] = {-1, -2, 4, -6, 5, 7}
B[] = {6, 3, 4, 0} 
X = 8 
Output:
4 4 
5 3

Expected Time Complexity: O(NLog(N))
Expected Auxiliary Space: O(N)


*/


function allPairWithGivenSum(arr1, arr2, sum) { // 0(n^2)

    let pairArray = []

    for(let i=0; i<arr1.length; i++) {

        for(let j=0; j<arr2.length; j++) {

            if((arr1[i] + arr2[j]) == sum) {

                pairArray.push([arr1[i],arr2[j]])
            }
        }
    }

    console.log(pairArray)

}






const driveArr1 = [1, 2, 4, 5, 7]
const driverArr2 = [5, 6, 3, 4, 8]


allPairWithGivenSum(driveArr1, driverArr2, 9)

