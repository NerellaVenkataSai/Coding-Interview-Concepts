/**
 *  QUEUE 
 *  
 *  Implementing QUEUE using array can be done using push and shift or unshift and pop
 * 
 *  But QUEUE using array is inefficient as shift/unshift changes all indexes 
 * 
 *  Using Linked List is better approach to achieve solution in constant time
 */

 class Node {
   constructor(val) {
     this.value = val;
     this.next = null;
   }
 }

 class Queue {
   constructor() {
     this.first = null;
     this.last = null;
     this.length = 0;
   }

   enqueue(val) {
     let newNode = new Node(val);
     if(!this.first) {
       this.first = newNode;
       this.last = newNode;
     } else {
       this.last.next = newNode;
       this.last = newNode;
       this.length++;
     }
   }

   dequeue() {
     if(!this.first) return null;
     let temp = this.first;
    
     // other condition approach 
    //  if(this.first === this.last) {
    //   this.last = null;
    //   }
    
     if(!temp.next){
       this.first = null;
       this.last = null;
       this.length = 0;
     } else {
      this.first = temp.next;
      this.length--;
     }
     return temp.value   
   }
 }

 const q = new Queue()

 q.enqueue(1)
 q.enqueue(2)
 q.enqueue(3)
 q.enqueue(4)
 q.enqueue(5)
 q.enqueue(6)

 console.log(JSON.stringify(q))

 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q.dequeue())
 console.log(q)
