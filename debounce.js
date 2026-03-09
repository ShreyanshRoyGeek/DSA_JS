/*
    Debounce 
*/


function debounce(delay) {

    let timerId = null

    return function(...args) {

        clearTimeout(timerId) // cancel the last call

        timerId = setTimeout(() => {
            getData(...args)
        }, delay)
    }

}


function getData(msg) {
    console.log('message ', msg)
}


const createDebounce = debounce(3 * 1000)

let msg1 = "Called 1"
let msg2 = "Called 2"
let msg3 = "Called 3"
let msg4 = "Called 4"
let msg5 = "Called 5"

createDebounce(msg1)
createDebounce(msg2)
createDebounce(msg3)


setTimeout(() => {
    createDebounce(msg5)
}, 3000)


