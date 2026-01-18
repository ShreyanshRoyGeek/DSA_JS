/*
    Kth smallest in BST
*/


let prevOrder = 1

function kthSmallestInBST(root, k) {

    if(root == null) return -1

    if(root.left) {
        let leftAns = kthSmallestInBST(root.left, k)
        if(leftAns != -1) return leftAns
    }

    if(prevOrder == k) return root.val

    prevOrder = prevOrder + 1

    if(root.right) {
        let rightAns = kthSmallestInBST(root.right, k)
        if(rightAns != -1) return rightAns
    }

    return -1

}


let elemtCountFromRight = 1

function kthLargestInBST(root, k) {

    if(root == null) return -1

    if(root.right) {
        let rightAns = kthLargestInBST(root.right, k)
        if(rightAns != -1) return rightAns
    }

    if(elemtCountFromRight == k) return root.val

    elemtCountFromRight += 1

    if(root.left) {
        let leftVal = kthLargestInBST(root.left, k)
        if(leftVal != -1) return leftVal
    }

    return -1
}




