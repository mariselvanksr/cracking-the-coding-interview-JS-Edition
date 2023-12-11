/**
 * Implement an queue via stacks.
 */

/**
 * The major difference between queue and stack is the queue is FIFO whereas the stack is LIFO.
 * The pop of the queue returns the first element pushed and peek returns the first element value without popping out.
 * 
 * 1. We can use the lazy approach where we can shift values to the new stack when needed.
 * 2. When pop and peek happens we move all the elements from new to old and pass the old values.
 */

class QueueWithStack {
    constructor() {
        this.newStack = [];
        this.oldStack = [];
    }

    shiftToOld() {
        // If oldStack already has some values that means we have patch of values that is present 
        // from an existing function execution.
        if(this.oldStack.length > 0) return;
       
        while(this.newStack.length) {
            this.oldStack.push(this.newStack.pop());
        }
    }

    push(val) {
        this.newStack.push(val);
    }

    peek() {
        this.shiftToOld();
        let peekValue = this.oldStack[this.oldStack.length - 1];
        
        return peekValue;
    }

    pop() {
        this.shiftToOld();
        let pop = this.oldStack.pop();

        return pop ? pop : 'Stack Is Empty';
    }
}

let queueWithStack = new QueueWithStack();

queueWithStack.push(4);
queueWithStack.push(3);
queueWithStack.push(5);
queueWithStack.push(1);
queueWithStack.push(8);
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())

queueWithStack.push(5);
queueWithStack.push(1);
queueWithStack.push(8);
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())
console.log(queueWithStack.pop())