/**
 *  generics
 */
class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item)
    pop = (): T => this.data.shift();
}

// only numbers are allowed
const q = new Queue<number>()
q.push(2)
console.log(q.pop())