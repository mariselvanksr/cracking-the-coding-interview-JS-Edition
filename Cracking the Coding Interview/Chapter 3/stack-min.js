/**
 * How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, Pop and Min should operate at O(1) time.
 */

/**
 * Solution:
 *  If we only keep one min variable when the user pops out value from the stack, we have to 
 *  calculate the latest min. This breaks the O(1) constrain.
 * 
 * 1. Create a node which holds min and value.
 * 2. On each push store the current min with value in the stack as an node object.
 * 3. When user pops gets the last node from the stack return value.
 * 4. When peek and getMin called, access the last node and gets value or min property accordingly.
 */

class Node {
    constructor(value, min) {
        this.value = value;
        this.min = min;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        let currentMin = value;

        if(this.peek()) {
            let peek = this.peek();

            currentMin = currentMin > peek.min ? peek.min : currentMin;
        }

        let newNode = new Node(value, currentMin)

        this.stack.push(newNode);
    }

    peek() {
        if(!this.stack.length) return false;

        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if(!this.stack.length) return false;

        return this.stack[this.stack.length - 1].min;
    }

    pop() {
        if(!this.stack.length) return false;

        let pop = this.stack.pop();

        return pop.value;
    }
}

let stack = new Stack();

stack.push(10)
stack.push(5)
stack.push(6)
stack.push(8)
stack.push(3)
stack.push(2)
stack.push(9)

console.log(stack.getMin())
stack.pop()
stack.pop()
console.log(stack.getMin())
stack.pop()
console.log(stack.getMin())
stack.pop()

/**
 * Instead of using an Node we can use an additional array to store the min elements at each time
 * the push happens. This will slightly reduce the space by not using object structure.
 * 
 * I'm not going to implement that now. Feel free to try by yourself.
 */