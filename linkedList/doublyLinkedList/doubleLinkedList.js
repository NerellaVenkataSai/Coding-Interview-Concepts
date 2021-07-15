class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push
  push(val) {
    let newNode = new Node(val);
    if(!this.head && !this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  //pop()

  pop(){
   if(this.length === 0) return undefined;
   let popNode = this.tail;
   if(this.length === 1) {
     this.head = null;
     this.tail = null
   } else {
     const preTail = popNode.prev;
     preTail.next = null;
     this.tail = preTail;
     popNode.prev = null
   }
    this.length--; 
    return popNode;
  }

  //shift remove first node which is head
  shift() {
    if(this.length === 0) return undefined
    let shiftingNode = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      const nextNode = shiftingNode.next;
      nextNode.prev = null;
      this.head = nextNode;
      shiftingNode.next =null;
    }
    this.length--;
    return shiftingNode;
  }

  //unshift add insert node at first
  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      newNode.next = currentHead;
      currentHead.prev = newNode;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  //get -- get val from index
  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    const halfLength = Math.floor(this.length / 2);
    let max = this.length % 2 === 0 ? halfLength : halfLength+1;
    if(index <= halfLength) {
      let i = 0;
      let currentNode = this.head;
      while(i <= max) {
        if(index === i) {
          return currentNode;
        }
        currentNode = currentNode.next;
        i++;
      }
    } else if(index > halfLength) {
      let i = this.length -1;
      let currentNode = this.tail;
      while(i > halfLength) {
        if(index === i) 
        {
          return currentNode
        }
        currentNode = currentNode.prev;
        i--;

      }
    }
  }
  //set -- set the val at particular index

  set(index, value) {
    if(index < 0 || index >= this.length) return undefined;
    let node = this.get(index);
    if(!!node) {
      node.val = value;
      return true;
    }
    return false;
  }

  // insert node at given Index

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;
    
    beforeNode.next = newNode, 
    newNode.prev = beforeNode;
    newNode.next = afterNode, 
    afterNode.prev = newNode;
    this.length++;
    return true;
 }
  // remove
  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    
    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;
  }
  
}



var doublyLinkedList = new DoublyLinkedList();

// 1 <-> 2

doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(4)
doublyLinkedList.push(5)
doublyLinkedList.push(6)
doublyLinkedList.push(7)
doublyLinkedList.push(8)
doublyLinkedList.push(9)
doublyLinkedList.push(10)
doublyLinkedList.push(11)

//pop
console.log(doublyLinkedList.pop())

//shift
console.log(doublyLinkedList.shift())

//unShift
console.log(doublyLinkedList.unshift(1))

console.log(doublyLinkedList)

console.log(doublyLinkedList.get(6))

console.log(doublyLinkedList.set(6, 7.5))

console.log(doublyLinkedList.get(6))

console.log(doublyLinkedList.insert(7, 7.8))

console.log(doublyLinkedList.get(7))

console.log(doublyLinkedList.remove(7))