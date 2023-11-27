/**
 * Priority queue represented as a node where we store value and priority.
 * In our case the min should be higher priority. That means it should put at the top of the queue.
 * When new priority comes in we will order it based on it's priority.
 */

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueueWithBinaryMinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.heap.push(node);

        let currentNodePriorityValue = priority;
        let currentNodeIndex = this.heap.length - 1;
        let parentNodeIndex = Math.floor((currentNodeIndex - 1)/2);
        let parentNodePriorityValue = this.heap[parentNodeIndex]?.priority;

        while(currentNodePriorityValue < parentNodePriorityValue) {
            let tempNode = this.heap[parentNodeIndex];
            this.heap[parentNodeIndex] = this.heap[currentNodeIndex];
            this.heap[currentNodeIndex] = tempNode;

            currentNodeIndex = parentNodeIndex;
            parentNodeIndex = Math.floor((currentNodeIndex - 1)/2);
            parentNodePriorityValue = this.heap[parentNodeIndex]?.priority;
        }

        return this.heap;
    }

    dequeue() {
        let topNode = this.heap.shift();

        let parentNodeIndex = 0;
        let rightNodeIndex = (2*parentNodeIndex + 1);
        let leftNodeIndex = (2*parentNodeIndex + 2);
        let parentNodeValue = this.heap[parentNodeIndex]?.priority;
        let rightNodeValue = this.heap[rightNodeIndex]?.priority;
        let leftNodeValue = this.heap[leftNodeIndex]?.priority;

        while((parentNodeValue > rightNodeValue) || (parentNodeValue > leftNodeValue)) {
            let isRightLesser = leftNodeValue ? rightNodeValue < leftNodeValue : true;

            if(isRightLesser && (parentNodeValue > rightNodeValue)) {
                let temp = this.heap[parentNodeIndex];
                this.heap[parentNodeIndex] = this.heap[rightNodeIndex];
                this.heap[rightNodeIndex] = temp;

                parentNodeIndex = rightNodeIndex;
            } else {
                let temp = this.heap[parentNodeIndex];
                this.heap[parentNodeIndex] = this.heap[leftNodeIndex];
                this.heap[leftNodeIndex] = temp;

                parentNodeIndex = leftNodeIndex;
            }

            rightNodeIndex = (2*parentNodeIndex + 1) + 1;
            leftNodeIndex = (2*parentNodeIndex + 1) + 2;
            parentNodeValue = this.heap[parentNodeIndex]?.priority;
            rightNodeValue = this.heap[rightNodeIndex]?.priority;
            leftNodeValue = this.heap[leftNodeIndex]?.priority;
        }

        return topNode;
    }
}


let priorityHeap = new PriorityQueueWithBinaryMinHeap();

console.log(priorityHeap.enqueue(10, 3))
console.log(priorityHeap.enqueue(20, 2))
console.log(priorityHeap.enqueue(30, 1))

console.log(priorityHeap.dequeue());
console.log(priorityHeap.heap);
console.log(priorityHeap.dequeue());
console.log(priorityHeap.heap);
console.log(priorityHeap.dequeue());
console.log(priorityHeap.heap);


