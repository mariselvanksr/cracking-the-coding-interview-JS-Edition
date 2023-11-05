class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.lastNode = null;
    }

    enqueue(data) {
        const node = new Node(data);
        
        if(this.head == null) {
            this.head = node;
            this.lastNode = node;
        } else {
            this.lastNode.next = node;
            this.lastNode = node;
        }
    }

    dequeue() {
        if(this.head === null) return 'Queue is empty';

        let nodeToReturn = this.head;
        this.head = this.head.next;
        nodeToReturn.next = null;

        return nodeToReturn;
    }

    peek() {
        return this.head;
    }

    print() {
        return JSON.stringify(this.head);
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.print());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(4);
queue.enqueue(5);

console.log(queue.print());

console.log(queue.peek());

console.log(queue.print());