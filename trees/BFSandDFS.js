class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(val === current.value) return undefined;
        if(val < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left
          }
        } else if(val > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }     
      }
    }
  }
  find(val) {
    if(!this.root) {
      return null
    } else {
      let current = this.root;
      while(true) {
          if(val === current.value) return current          
          if(val < current.value) {
            if(current.left === null) {
              return null
            } else {
              current = current.left;
            }
          } else if(val > current.value) {
            if(current.right === null) {
              return null;
            } else {
              current = current.right;
            }
          }
        }      
      }
    }
    BFS() {
      /**
       *  for mechanism https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344808#questions
       */
      let node = this.root;
      let queue = [];
      let data = [];
      queue.push(node);
      while(queue.length) {
         node = queue.shift()
         data.push(node.value)
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right)
      }
      return data;
    }

    DFSPreOrder() {
      var data = [];
      function traverse(node) {
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }

    DFSPostOrder() {
      var data = [];
      function traverse(node) {
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(this.root);
      return data;
    }

    DFSInOrder() {
      var data = [];
      function traverse(node) {
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }

    getWidthArrayAtEachLevel(tree) {
      
    }
  }

/**  
 *           10                 In order    // 2 5 7 10 12 13 16 // TODO without recursion
 *      5         13            pre order   //10 5 2 7 13 12 16  // without recursion same approach as BFS instead of pushing child nodes use unshift for child node
 *   2    7    12    16         post Order  //2 7 5 12 16 13 10  // TODO without recursion
 */

 const bst = new BinarySearchTree()

 bst.insert(10)
 bst.insert(5)
 bst.insert(2)
 bst.insert(7)
 bst.insert(13)
 bst.insert(12)
 bst.insert(16)

 console.log(bst.find(10))

 console.log(JSON.stringify(bst))

 /**
  *          BFS
  *  -->         10
  *  -->     5         13          o/p [10, 5, 13, 2, 7, 12, 16]
  *  -->  2    7    12    16
  * 
  * q: [10]              d: []
  * q: [5, 13] ,         d: [10]
  * q: [13, 2, 7] ,      d: [10, 5]
  * q: [2, 7, 12, 16] ,  d: [10, 5, 13]
  * q: [7, 12, 16] ,     d: [10, 5, 13, 2]
  * q: [12, 16] ,        d: [10, 5, 13, 2, 7]
  * q: [16] ,            d: [10, 5, 13, 2, 7, 12]
  * q: [] ,              d: [10, 5, 13, 2, 7, 12, 16]
  */

  console.log(bst.BFS())

  // PREORDER

  // const bst1 = new BinarySearchTree()
  // bst1.insert(10)
  console.log(bst.DFSPreOrder())

  //POST ORDER
  console.log(bst.DFSPostOrder())

  //IN ORDER
  console.log(bst.DFSInOrder())

  // Width at each level
  // reference https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547238#overview
  /**  
   * using BFS approach
   *              10
  *  -->     5         13          
  *  -->  2    7    12    16
  *      
  *      counter: [0]
  *      Array: []
  *    
  *      counter: [0] 
  *      Array: [10,'s'] // 's denotes stopper at each level'
  *      
  *      counter: [1]
  *      Array: ['s', 5, 13]
  * 
  *      counter: [1, 0]
  *      Array: [5, 13, 's']
  * 
  *     counter: [1, 1]
  *     Array: [13, 's', '2','7']
  * 
  *     counter: [1, 2]
  *     Array: ['s', '2','7', 12, 16]
  * 
  *    counter: [1, 2, 0]
  *    Array: [2','7', 12, 16, 's']
  * 
  *   counter: [1, 2, 1]
  *    Array: [7, 12, 16, 's']
  * 
  *   counter: [1, 2, 2]
  *    Array: [12, 16, 's']
  * 
  *   counter: [1, 2, 3]
  *    Array: [16, 's']
  * 
  *   counter: [1, 2, 4]
  *    Array: ['s']
  * 
  *   counter: [1, 2, 4]
  *    Array: []
  *   
  */