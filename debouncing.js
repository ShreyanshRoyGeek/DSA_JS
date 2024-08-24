/*

    Debouncing is a technique used in JavaScript to control how often a particular function is executed. 
    It's typically used in scenarios where a function might be called frequently, 
    such as event handlers tied to user input (like keypresses or scroll events), 
    but you only want to execute the function after a certain delay once the events have stopped firing.

*/

function debounce(func, delay) {

    let timeoutId = null

    return function() {

        const context = this
        const args = arguments
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            func.apply(context, args)
        }, delay)

    }

}


function handleInput() {
    console.log("Input has stopped!")
}

const debounceHandleInput = debounce(handleInput, 5000)

// Attach the debounced function to an input event
// document.getElementById('inputField').addEventListener('input', debounceHandleInput)

