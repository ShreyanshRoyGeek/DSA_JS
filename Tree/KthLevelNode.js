/*

    Kth level of BT --> 

*/


function kthLevel(root, k) {

    if(root == null) return 

    if(k == 1) {
        console.log(root.data)
        // res.push(root.data)
    }

    kthLevel(root.left, k-1)
    kthLevel(root.right, k-1)

}









