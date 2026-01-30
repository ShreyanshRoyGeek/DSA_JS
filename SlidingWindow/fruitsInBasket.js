/*
    Fruits in Basket 

    You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

    You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

    You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
    Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
    Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
    Given the integer array fruits, return the maximum number of fruits you can pick.

    Example 1:
    Input: fruits = [1,2,1]
    Output: 3
    Explanation: We can pick from all 3 trees.
    
    Example 2:
    Input: fruits = [0,1,2,2]
    Output: 3
    Explanation: We can pick from trees [1,2,2].
    If we had started at the first tree, we would only pick from trees [0,1].
    
    Example 3:
    Input: fruits = [1,2,3,2,2]
    Output: 4
    Explanation: We can pick from trees [2,3,2,2].
    If we had started at the first tree, we would only pick from trees [1,2].


    Constraints:
    1 <= fruits.length <= 105
    0 <= fruits[i] < fruits.length
*/



function fruitsInTheBasket(fruits) {

    let map = new Map()
    let left = 0, right = 0, maxLen = 0

    for(let right=0; right<fruits.length; right++) {

        map.set(fruits[right], ( map.get(fruits[right]) || 0 )+ 1)

        while(map.size > 2) {

            map.set(fruits[left], ( map.get(fruits[left]) ) - 1)

            if(map.get(fruits[left]) == 0) {
                map.delete(fruits[left])
            }

            left++
        }

        if(map.size <= 2) {
            maxLen = Math.max(maxLen, (right - left + 1))
        }

    }

    return maxLen
}


/*function fruitsInBasket(A) {

    let basket = {}; // count of fruits in current window
    let start = 0, maxCount = 0;

    for (let end = 0; end < A.length; end++) {
        basket[A[end]] = (basket[A[end]] || 0) + 1;

        // Shrink window if more than 2 types
        while (Object.keys(basket).length > 2) {
            basket[A[start]]--;
            if (basket[A[start]] === 0) delete basket[A[start]];
            start++;
        }

        // Update maximum fruits collected
        maxCount = Math.max(maxCount, end - start + 1);
    }

    return maxCount;

}*/


// let fruits = [1, 2, 3, 2, 2]
let fruits = [3,3,3,1,2,1,1,2,3,3,4]
const res = fruitsInTheBasket(fruits)
console.log(res)

