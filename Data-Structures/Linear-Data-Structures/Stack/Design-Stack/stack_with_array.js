class Stack {
    stack = [];
    stack_size = 0;
    fixed_size = 0;

    constructor(stack_size = 100) {
        this.fixed_size = stack_size;
        this.stack = Array(stack_size).fill(0);
    }

    push(data) {
        if(this.fixed_size < (this.stack_size + 1)) {
            console.error('Stack Overflow Exception')

            return;
        }


        this.stack[this.stack_size] = data;
        this.stack_size++;
    }

    pop() {
        if(this.stack_size === 0) return 'Nothing to pop';

        let last_pushed_element = this.stack[this.stack_size - 1];
        this.stack[this.stack_size - 1] = 0;
        this.stack_size--;

        return last_pushed_element;
    }

    top() {
        if(this.stack_size === 0) return false;

        return this.stack[this.stack_size - 1];
    }

    isEmpty() {
        return this.stack_size === 0;
    }
}

const stackStructure = new Stack(5);
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