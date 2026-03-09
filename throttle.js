/*
    Throttle - wait for specified amount of time for further exceution
*/



function createThrotller(delay) {

    let lastCall = 0

    return function(...args) {

        const now = Date.now()

        if((now - lastCall) < delay) {
            return
        }
    
        lastCall = now
        getMessage(...args)
    }

}


function getMessage(msg) {
    console.log('msg', msg)
}

let delay = 2 * 1000
const throttledLog = createThrotller(delay)


let message1 = "Hello World 1"
let message2 = "Hello WOrld 2"
let message3 = "Hello WOrld 3"
let message4 = "Hello WOrld 4"
let message5 = "Hello WOrld 5"


throttledLog(message1)
throttledLog(message2)
throttledLog(message3)
throttledLog(message4)


setTimeout(() => {
    throttledLog(message5)
}, 3000)

