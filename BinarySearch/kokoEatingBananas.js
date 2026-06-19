/*
    875 - Koko Eating Bananas --> (Medium)

    Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
    The guards have gone and will come back in h hours.

    Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

    Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

    Return the minimum integer k such that she can eat all the bananas within h hours.

    Example 1:
    Input: piles = [3,6,7,11], h = 8
    Output: 4
    
    Example 2:
    Input: piles = [30,11,23,4,20], h = 5
    Output: 30
    
    Example 3:
    Input: piles = [30,11,23,4,20], h = 6
    Output: 23

    Constraints:
    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109
 
*/


function minEatingSpeed(piles, h) { 

    let maxSpeed = Math.max(...piles)
    let minSpeed = 1

    while(minSpeed < maxSpeed) {

        let midSpeed = Math.floor((minSpeed + maxSpeed) / 2)

        if(canEatOnTime(piles, h, midSpeed)) {
            maxSpeed = midSpeed
        } 
        else {
            minSpeed = midSpeed + 1 
        }

    }

    return minSpeed
}


function canEatOnTime(piles, h, speed) {
    let hours = 0

    for(let pile of piles) {
        hours += Math.ceil(pile / speed)
    }

    return hours <= h
}


// let piles = [3,6,7,11]
// let h = 8

// let piles = [30,11,23,4,20]
// let h = 5

let piles = [30,11,23,4,20]
let h = 6

let res = minEatingSpeed(piles, h)
console.log(res)
