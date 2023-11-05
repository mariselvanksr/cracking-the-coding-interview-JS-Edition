class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.stack = null;
        this.stack_size = 0;
        this.head = null;
        this.last_inserted_node = null;
    }

    push(data) {
       const node = new Node(data);

       if(this.head === null) {
        this.head = node;
        this.last_inserted_node = node;
       } else {
        this.last_inserted_node.next = node;
        this.last_inserted_node = node;
       }

       this.stack_size ++;
    }

    pop() {
        if(this.stack_size === 0) return 'Nothing to pop';
        let current_node = this.head;
        let previous_node = null;

        while(current_node.next != null) {
            previous_node = current_node;
            current_node = current_node.next;
        }

        if(previous_node) {
            previous_node.next = null;
        }
       
        return current_node;
    }

    top() {
        if(this.stack_size === 0) return false;

        return this.last_inserted_node;
    }

    isEmpty() {
        return this.stack_size === 0;
    }
}

const stackStructure = new Stack();
stackStructure.push(1);
stackStructure.push(2);
stackStructure.push(3);
console.log(stackStructure.top());
stackStructure.push(4);
stackStructure.push(5);
stackStructure.push(6);

console.log(stackStructure.top());

console.log(stackStructure.isEmpty());

console.log(stackStructure.pop());
console.log(stackStructure.pop());
console.log(stackStructure.pop());

console.log(stackStructure.top());

console.log(stackStructure.pop());
console.log(stackStructure.pop());
console.log(stackStructure.pop());

console.log(stackStructure.top());

console.log(stackStructure.pop());

console.log(stackStructure.isEmpty());