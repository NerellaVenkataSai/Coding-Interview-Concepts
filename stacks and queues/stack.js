class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
};

/**
 *  stack can be implemented using arrays shift and unshift / push and pop.
 * 
 *  In Arrays implementing stack using push and pop is more efficient than shift and unshift as unshift needs to be changed all other array indexes which is inefficient for stack
 * 
 *  In this solution we are using single linked list to solve stack
 * 
 *  Here we are using unshift as push and shift as pop. so we are manipulating Head in Linked List when inserting and deleting first while popping
 * 
 *  If we do pop using tail in SLL it won't be in constant time as we need to traverse whole list to get preNode of list to remove tail. so we are following above approach.
 */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.first) return undefined;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }

    this.first = temp.next
    this.length--;
    console.log(this.first)
    return temp.value;
  }
}

const stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(JSON.stringify(stack))

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
