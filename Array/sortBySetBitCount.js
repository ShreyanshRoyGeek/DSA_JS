/*

    Sort by Set Bit Count --> (Easy)

    Given an array of integers, sort the array (in descending order) according to count of set bits in binary representation of array elements. 

    Note: For integers having same number of set bits in their binary representation, sort according to their position in the original array i.e., a stable sort.


    Input: 
    arr[] = {5, 2, 3, 9, 4, 6, 7, 15, 32};
    Output:
    15 7 5 3 9 6 2 4 32
    Explanation:
    The integers in their binary
    representation are:
    15 - 1111
    7  - 0111
    5  - 0101
    3  - 0011
    9  - 1001
    6  - 0110
    2  - 0010
    4  - 0100
    32 - 10000
    hence the non-increasing sorted order is:
    {15}, {7}, {5, 3, 9, 6}, {2, 4, 32}


    Input: 
    arr[] = {1, 2, 3, 4, 5, 6};
    Output: 
    3 5 6 1 2 4
    Explanation:
    3  - 0011
    5  - 0101
    6  - 0110
    1  - 0001
    2  - 0010
    4  - 0100
    hence the non-increasing sorted order is
    {3, 5, 6}, {1, 2, 4}


    Expected Time Complexity: O(N.log(N))
    Expected Auxiliary Space: O(1)


*/



function sortBySetBitCount(arr) {

    function countSetBit(n) {
        let count = 0
        while(n > 0) {
            const rem = n%2
            if(rem == 1) {
                count++
            }
            n = Math.floor(n/2)
        }
        return count
    }

    const table = new Map()
    for(let i=0; i<arr.length; i++) {
        const n = arr[i]
        table.set(arr[i], countSetBit(n))
    }

    let temp = []

    table.forEach((value, key) => {
        temp.push({key, value})
    });

    temp.sort((a,b) => b.value - a.value)

    let res = []
    for(let ele of temp) {
        res.push(ele['key'])
    }

    return res
}


function sortBySetBitCountII(arr) { // 0(n*logn), 0(1)

    const countSetBits = (num) => {
        let count = 0;
        while (num) {
            num &= (num - 1);
            count++;
        }
        return count;
    };

    // Cache bit counts to avoid recomputation
    const bitCounts = new Map();
    for (let num of arr) {
        bitCounts.set(num, countSetBits(num));
    }

    // Sort using precomputed values
    return arr.sort((a, b) => {
        const bitsA = bitCounts.get(a);
        const bitsB = bitCounts.get(b);
        return bitsB - bitsA;
    });
    
}



function sortAnArray(arr) {

    // arr = arr.sort((a,b => a-b))

    for(let i=0; i<arr.length; i++) {

        for(let j=i+1; j<arr.length; j++) {

            if(arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }            
        }
    }
    return arr

}

let arr = [5, 2, 3, 9, 4, 6, 7, 15, 32]
const res = sortBySetBitCount(arr)
// const res = sortAnArray(arr)
console.log('res', res)

