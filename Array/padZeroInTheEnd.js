/*
    Pad Zero in the end
*/


function padZero(arr) {

    let left = 0, right = arr.length - 1

    while (left < right) {

        if (arr[left] == 0) {

            if (arr[right] !== 0) {
                swap(left, right)
                right--
            }
            else {
                while(right > left && arr[right] == 0) {
                    right--
                }
                swap(left, right)
                right--
            }

        }

        left++
    }

    return arr

}


function swap(left, right) {

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

}



let arr = [0, 1, 0, 3, 12, 1, 2, 0, 0, 0, 1, 7, 0, 8, 0]
const res = padZero(arr)
console.log(res)


