/*
    Tree Implementation using JS
*/


class Tree {

    constructor(node) {
        this.data = node
        this.left = null
        this.right = null
    }

}


function inOrder(node, res) {

    if(node == null) return 

    // recursion for left part
    inOrder(node.left, res)

    // print main node
    res.push(node.data)

    // recursion for right part
    inOrder(node.right, res)


}


function preOrder(node, res) {

    if(node == null) return

    res.push(node.data)
    
    preOrder(node.left, res)

    preOrder(node.right, res)
    
}


function postOrder(node, res) {

    if(!node) return

    postOrder(node.left, res)

    postOrder(node.right, res)

    res.push(node.data)

}


// count nodes in the tree
function getSize(node) {

    if(!node) return 0

    let left = getSize(node.left)

    let right = getSize(node.roght)

    return left + right + 1 

}


function height (node) {

    if(!node) return 0

    let left = height(node.left)

    let right = height(node.right)

    return Math.max(left + right) + 1
}



function sumOfNodes(node) {

    if(!node) return 0

    let leftSum = sumOfNodes(node.left)

    let rightSum = sumOfNodes(node.right)

    return leftSum + rightSum + node.data

}


function isIdentical(p, q) {

    if(p == null || q == null) return p == q

    let isLeftSame = isIdentical(p.left, q.left)

    let isRightSame = isIdentical(p.right, q.right)

    return isLeftSame && isRightSame && p.data == q.data 
}


function isSubTree(root, subroot) {

    if(root == null || subroot == null) return root == subroot

    if(root.val == subroot.val && isIdentical(root, subroot)) return true 

    return isSubTree(root.left, subroot) || isSubTree(root.right, subroot)

}

function kthLevel(root, k) {

    if(root == null) return 

    if(k == 1) {
        console.log(root.data)
        // res.push(root.data)
    }

    kthLevel(root.left, k-1)
    kthLevel(root.right, k-1)

}

const tree = new Tree(1)
tree.left = new Tree(2)
tree.right = new Tree(3)
tree.left.left = new Tree(4)
tree.left.right = new Tree(5)
tree.right.left = new Tree(6)
tree.right.right = new Tree(7)


const subTree = new Tree(2)
subTree.left = new Tree(4)
subTree.right = new Tree(5)

console.log(tree)
// console.log(subTree)

let res = []

// inOrder(tree, res)
// console.log(res)

// preOrder(tree, res)
// console.log(res)


// postOrder(tree, res)
// console.log(res)

// console.log(getSize(tree)) 

// console.log(height(tree))

// console.log(sumOfNodes(tree))

// console.log(isSubTree(tree, subTree))

kthLevel(tree, 3)


