
function throttle(func, delay) {

    let lastCalled = 0

    return function() {

        const now = Date.now()

        if(now - lastCalled >= delay) {
            func.apply(this, arguments)
            lastCalled = now    
        }
        
    }

}

function handleScroll() {
    console.log("Scrolled")
}

const throttledHandledScroll = throttle(handleScroll, 1000) // Throttle to 1 call per second


// Attach the throttled function to a scroll event
// window.addEventListener('scroll', throttledHandledScroll)

// const now = Date.now()
// const now1 = new Date()

// console.log("now", now)
// console.log("now1", now1)

