class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue[this.queue.length || 0] = data;
    }

    dequeue() {
        if(this.queue.length === 0) return 'Queue is Empty'

        let data = this.queue[0];
        this.queue.splice(0,1);

        return data;
    }

    peek() {
        return this.queue[0];
    }

    print() {
        return this.queue;
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