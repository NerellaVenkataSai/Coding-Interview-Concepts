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

    leftViewOfBT() {
        let node = this.root;
        let queue = [];
        let data = [];
        data.push(node.value);
        node = this.root.left;
        queue.push(node);
        while(queue.length) {
          node = queue.shift()
          data.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
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
 *           10                 In order    // 2 5 7 10 12 13 16 // check below for without recursion
 *      5         13            pre order   //10 5 2 7 13 12 16  // check below for without recursion
 *   2    7    12    16         post Order  //2 7 5 12 16 13 10  // check below for without recursion
 *                              level order // 10 5 13 2 7 12 16 // same as BFS
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


  // leftView of Tree
  console.log(bst.leftViewOfBT())

  //How to validate tree is BST or not
  /**
   * 1. all left nodes should be less than root node
   * 2. all right nodes should be grater than root node
   * 3. keeping these two rules in mind we can use leftView and right view algos to validate BST
   *  */ 

  // PREORDER

  // const bst1 = new BinarySearchTree()
  // bst1.insert(10)
  console.log(bst.DFSPreOrder())

  //POST ORDER
  console.log(bst.DFSPostOrder())

  //IN ORDER
  console.log(bst.DFSInOrder())

  //Pre-Order in iterative way
  // ref https://www.youtube.com/watch?v=K2ybI-GEHSY&list=PLEJXowNB4kPzqcnf9CnjEcgP7r5LaSijB&index=1

  /**
   *   using BFS approach in specific order as below
   *   1. First push the root element in stack
   *   2. Take another empty preorder array to store values
   *   3. Pop the root element from stack and push into preorder array
   *   4. Push right child of root first into stack if exists and then left child of stack if exists
   *   5. while loop above 3,4 steps until stack is empty.
   * 
   *           10
  *       5         13          
  *    2    7    12    16
  * 
  *    stack                  pre-order
   *   [10]                   []
   *   [13,5]                 [10]
   *   [13,7,2]               [10,5]
   *   [13,7]                 [10,5,2]
   *   [13]                   [10,5,2,7]
   *   [16,12]                [10,5,2,7,13]
   *   [16]                   [10,5,2,7,13,12]
   *   []                     [10,5,2,7,13,12,16]
   */



// post-order in iterative way
  // ref https://www.youtube.com/watch?v=k21VKEM8OFY&list=PLEJXowNB4kPzqcnf9CnjEcgP7r5LaSijB&index=3
  /**
   *           10
   *      5         13
   *   2     7   12    16
   * 
   *   1. First push root into stack1
   *   2. Take another stack2 to store popped values
   *   3. pop the root element from stack1 and push the popped element into stack2
   *   4. And push left and right child of popped root element if exists into stack1
   *   5. loop 3,4 steps until stack1 is empty
   *   6. Finally reverse stack2 to get post-ordered array
   * 
   *   stack1                             stack2
   *   [10]                               []
   *   [5,13]                             [10]
   *   [5,12,16]                          [10,13]
   *   [5,12]                             [10,13,16]
   *   [5]                                [10,13,16,12]
   *   [2,7]                              [10,13,16,12,5]
   *   [2]                                [10,13,16,12,5,7]
   *   []                                 [10,13,16,12,5,7,2]
   * 
   *   reverse stack2 -> [2,5,7,12,16,13,10]
   */ 



  // In-order in iterative way
  // ref https://www.youtube.com/watch?v=5y_j0OqD7v8&list=PLEJXowNB4kPzqcnf9CnjEcgP7r5LaSijB&index=2
  /**
   *                    10
   *              5           13
   *           2     7     12    16
   *                           1                     
   *   1. Traverse to extreme left of tree and push each root into stack
   *   2. Once you reached extreme left pop element for stack and push if there is any right child existing on it into sack. And push popped element into in-oder array
   *   3. Repeat first step if there is any left child on newly pushed right child.
   *   4. loop above steps until stack is empty
   * 
   *   stack                      in-order
   *   [10]                       []
   *   [10,5]                     []
   *   [10,5,2]                   []
   *   [10,5]                     [2]              // no child
   *   [10,7]                     [2,5]            // popped and pushed right child into stack
   *   [10]                       [2,5,7]          // no child
   *   [13]                       [2,5,7,10]       // popped and pushed right child into stack
   *   [13, 12]                   [2,5,7,10]       // pushed left child without popping last pushed right child
   *   [13]                       [2,5,7,10,12]    // no child
   *   [16]                       [2,5,7,10,12,13] // popped and pushed right child into stack
   *   [16,1]                     [2,5,7,10,12,13]
   *   [16]                       [2,5,7,10,12,13]
   *   []                         [2,5,7,10,12,13,16]
   *   
   */




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

  