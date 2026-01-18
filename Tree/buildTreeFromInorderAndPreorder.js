/*
    Build Tree from inorder and preorder 
*/


class Tree {
    constructor(val) {
        this.data = val
        this.left = null
        this.right = null
    }
}

function levelOrder(node) {

    if(!node) return 

    let res = []

    levelOrderRec(node, 0, res)

    function levelOrderRec(node, level, res) {

        if(!node) return

        if(res.length <= level) {
            res.push([])
        }

        res[level].push(node.data)

        levelOrderRec(node.left, level+1, res)
        levelOrderRec(node.right, level+1, res)

    }

    return res

}


function buildTreeFromInorderAndPreorder(inorder, preorder) {


    const preIndx = [0]
    // const preIndx = [0]
    // console.log(preorder[preIndx])

    return buildTreeRecur(inorder, preorder, preIndx, 0, preorder.length-1)



    function buildTreeRecur(inorder, preorder, preIndx, left, right) {

        console.log(preorder)

        if(left > right) return null

        // const rootVal = preorder[preIndx]
        const rootVal = preorder[preIndx[0]]

        // console.log('log', preorder[preIndx[0]])

        // preIndx++
        preIndx[0]++

        console.log('rootVal', rootVal)


        const root = new Tree(rootVal)

        const indx = search(inorder, rootVal, left, right)

        console.log('indx', indx)


        root.left = buildTreeRecur(inorder, preorder, preIndx, left, indx-1)
        root.right = buildTreeRecur(inorder, preorder, preIndx, indx+1, right)

        return root

    }


    function search(inorder, value, left, right) {

        for(let i=left; i<=right; i++) {
            if(inorder[i] == value) return i
        }

        return -1
    }

}


const inorder = [3, 1, 4, 0, 5, 2];
const preorder = [0, 1, 3, 4, 2, 5];

const root = buildTreeFromInorderAndPreorder(inorder, preorder);
console.log(root)


console.log(levelOrder(root))
