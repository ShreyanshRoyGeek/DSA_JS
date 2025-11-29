/*
    Merge Sort
*/


function mergeSortAlgo(arr) {

    let start = 0, end = arr.length -1

    mergeSort(arr, start, end)

    return arr
}


function mergeSort(arr, s, e) {

    if(s >= e) return 

    const mid = Math.floor((s+e) / 2)

    // left part
    mergeSort(arr, s, mid)

    // right part
    mergeSort(arr, mid+1, e)

    merge(arr, s, e)

}


function merge(arr, s, e) {

    const mid = Math.floor((s+e)/ 2)

    const len1 = mid - s + 1
    const len2 = e - mid 


    const first = new Array(len1)
    const second = new Array(len2)

    let mainArrayIndex = s


    // copy values
    for(let i=0; i<len1; i++) {
        first[i] = arr[mainArrayIndex++]
    }

    mainArrayIndex = mid + 1
    for(let i=0; i<len2; i++) {
        second[i] = arr[mainArrayIndex++]
    }


    // merge 2 sorted array
    let index1 = 0, index2 = 0
    mainArrayIndex = s

    while(index1 < len1 && index2 < len2) {

        if(first[index1] < second[index2]) {
            arr[mainArrayIndex++] = first[index1++]
        }
        else {
            arr[mainArrayIndex++] = second[index2++]
        }

    }

    while(index1 < len1) {
        arr[mainArrayIndex++] = first[index1++]
    }

    while(index2 < len2) {
        arr[mainArrayIndex++] = second[index2++]
    }


}


let arr = [3, 6, 8, 2, 4, 10, 9, 0, 5, 7]
const res = mergeSortAlgo(arr)
console.log(res)


