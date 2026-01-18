/*
    Tree is a vlaid BST
*/



function validTree(tree) {

    return helper(root, null, null)

    function helper(root, min, max) {

        if(!root) return true

        if(min != null && root.val < min) return false 

        if(max != null && root.val > max) return false

        return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }

}


