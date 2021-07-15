class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }
  pop() {
    if(!this.head) return undefined;
    let currentNode = this.head;
    let preTail =  currentNode;
    while(currentNode.next) {
      preTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = preTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
    }
    this.length++;
     return this;
    
  }
  
  // get val from index
  get(index) {
    if(index < 0 || index >= this.length) return undefined;

    let node = this.head;
    let i = 0
    while(i < index) {
      node = node.next
      i++
    }
    return node;
  }

  //set(val, index)

  set(val, index) {
    const node = this.get(index)
    if(node) {
      node.val = val;
      return true
    }
    return false;
  }

  //insert
  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) {
      return !!this.unshift(val)
    }
    if(index === this.length) {
      return !!this.push(val)
    }
    const prevNode = this.get(index - 1)
    if(prevNode) {
      const nextNode = prevNode.next;
      const newNode = new Node(val);
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++
      return true
    }
    return false;
  }

  //remove
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) {
      return !!this.shift()
    }
    if(index === this.length) {
      return !!this.pop()
    }
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next.next;
    prevNode.next = nextNode
    this.length--
    return true;
  }

  // reverse

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i< this.length; i++) {
      next = node.next;
      console.log(node.next)
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

/**
 *  0 1 2 3 4
    P N
 *  1 <- 0
 * 
 * 
 *  */
export const linkedList = new SingleLinkedList();

//push
linkedList.push(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

//pop
linkedList.pop()

//unShift
linkedList.unshift(0.5)

//shift
linkedList.shift()

//get
console.log(linkedList.get(2))

//set
console.log(linkedList.set(1.5, 1))

//insert
console.log(linkedList.insert(2.5, 2))

// remove
console.log(linkedList.remove(2))

console.log(linkedList.length)
console.log(JSON.stringify(linkedList.head))
console.log(linkedList.tail)


//reverse
console.log(JSON.stringify(linkedList.reverse()))


/**
 *   problems on Linked List
 */

 //Q. Find Middle Node in Linked List with o(N) and without using size of list

 const linkedListProblem = new SingleLinkedList();

  linkedListProblem.push(0);
  linkedListProblem.push(1);
  linkedListProblem.push(2);
  linkedListProblem.push(3);
  linkedListProblem.push(5);
  linkedListProblem.push(6);

  /**
   * https://www.youtube.com/watch?v=2C7WrpgnLDw&list=PLEJXowNB4kPxEGqBZgYZZv3vy9Adj5_Am
   * 
   * Take two pointers slow and fast. Fast pointer moves two nodes and check whether two nodes are present or not
   *  If present increment slow pointer to 1 node 
   *  else return slow pointer
   * 
   *    s 
   *    0 -> 1 -> 2 -> 3 -> 4 -> 5
   *    F
   *  
   * */ 

   // solution for even and odd sized linked list will be same

   function getMiddleNode(list) {

      
     let slow = list.head;
     let fast = list.head;

     while(fast.next && fast.next.next) {
       slow = fast.next;
       fast = fast.next.next;
     }

     return slow;
   }

   console.log(getMiddleNode(linkedListProblem))

   //test for odd sized list
   linkedListProblem.pop();
   console.log(getMiddleNode(linkedListProblem))

   
   //Q. Detect Circular LinkedList

   /**
    *   same two pointer technique as above and detect if two pointers matches at certain position
    */

    let Clist = new SingleLinkedList()

    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');

    Clist.head = a;
    a.next = b;
    b.next = c;
    c.next = b;

    console.log(c === c)
    // a -> b -> c 
    //      |____|
 
    function detectCircular(l) {
      let slow = l.head;
      let fast = l.head;

      while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        // reference check of two nodes
        if(slow === fast) {
          return true;
        }
      }
      return false
    }

    console.log(detectCircular(Clist))


  /** 
   * Q. Given a linked list and integer n , return the element n spaces from the last node in the list.
   *  
   *   Do not call the 'size' method of the linked list
   *   Assume that n,  will always be less than the length of the list.
   * 
   * **/    

   /**
    *   take two pointers
    *   https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547208#overview
    */
   const getLastFromNLinkedList = new SingleLinkedList();

   getLastFromNLinkedList.push(0);
   getLastFromNLinkedList.push(1);
   getLastFromNLinkedList.push(2);
   getLastFromNLinkedList.push(3);
   getLastFromNLinkedList.push(5);
   getLastFromNLinkedList.push(6);

   function getNodeFromLastNSpaces(l, n) {
 
      let fast = l.head;
      let slow = l.head;
      let i = 0;
      while(i < n) {
        fast = fast.next
        console.log(fast)
        i++
      }
      console.log(fast)
      while(fast.next) {
        fast = fast.next
        slow = slow.next
      }
      console.log(slow)
      return slow
   }

   console.log(getNodeFromLastNSpaces(getLastFromNLinkedList, 1))
