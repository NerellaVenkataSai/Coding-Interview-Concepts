
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

function BSTFromPreOrderArray(arr) {

    let root = new TreeNode(arr[0]);

    // current is reference of root so if we edit current root will automatically get edited
    let current = root;

    function insertBST(value){
        let newNode = new TreeNode(value)
        current = root
        while(true) {
            if(value === current.val) return undefined;
            if(value < current.val) {
              if(current.left === null) {
                current.left = newNode;
                return;
              } else {
                current = current.left
              }
            } else if(value > current.val) {
              if(current.right === null) {
                current.right = newNode;
                return;
              } else {
                current = current.right;
              }
            }     
          }

    }

    for(let i = 1; i < arr.length; i++) {
        insertBST(arr[i])
    }
    
    console.log(root)
    return root;
    
}


//[9,8,10]

console.log(BSTFromPreOrderArray([8,5,1,7,10,12]))

