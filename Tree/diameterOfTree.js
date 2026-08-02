/*
    543. Diameter of binary tree --> (Easy)

    Given the root of a binary tree, return the length of the diameter of the tree.

    The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

    The length of a path between two nodes is represented by the number of edges between them.

    Example 1.
    Input: root = [1,2,3,4,5]
    Output: 3
    Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].


    Example 2.
    Input: root = [1,2]
    Output: 1


*/


function diameterOfTheTree(root) {  // O(n*n) - time

    if(root == null) return 0

    let leftDiam = diameterOfTheTree(root.left)
    let rightDiam = diameterOfTheTree(root.right)
    let currDiam = height(root.left) + height(root.right)

    return Math.max(currDiam, Math.max(leftDiam, rightDiam))

    function height(node) {

        if(!node) return 0

        let leftHt = height(node.left)
        let rightHt = height(node.right)

        return Math.max(leftHt, rightHt) + 1

    }

}


function diameterOfTheTreeI(root) { // O(n) - time

    let ans = 0
    
    function heightModified(node) {

        if(!node) return 0

        let leftHt = heightModified(node.left)
        let rightHt = heightModified(node.right)

        ans = Math.max(ans, leftHt + rightHt)

        return Math.max(leftHt, rightHt) + 1

    }

    heightModified(root)
    return ans

}
