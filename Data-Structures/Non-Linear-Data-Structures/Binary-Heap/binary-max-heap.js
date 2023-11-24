/**
 * If parent is in n
 * left child position (2n+1)
 * right child position (2n+2)
 * 
 * if a child is in n position
 * parent for the child is floor((n-1)/2)
 */

class BinaryMaxHeap {
    constructor(){
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);

        /**
         * Bubbling process to make sure the top node always the max node
         * Compare the last node to it's parent if it max reverse it
         * Do this until you reach the right spot for the newly added node 
         * */

        let lastNodePosition = this.heap.length - 1;
        let parentNodePosition = Math.floor((lastNodePosition - 1) / 2)

        while(this.heap[lastNodePosition] > this.heap[parentNodePosition]) {
            let temp = this.heap[lastNodePosition];
            this.heap[lastNodePosition] = this.heap[parentNodePosition];
            this.heap[parentNodePosition] = temp;

            lastNodePosition = parentNodePosition;
            parentNodePosition = Math.floor((lastNodePosition - 1) / 2);
        }
    }

    /**
     * In Binary Max Heap you will only remove the top max element
     * Then we move the last added node to the parent.
     * Compare the parent to it's child's and move if one of them are grater.
     */
    getMax() {
        let maxNode = this.heap.shift();
        let lastNode = this.heap.pop();
        this.heap.unshift(lastNode);

        let parentIndex = 0;
        let leftChildIndex = 1; // (2n+1)
        let rightChildIndex = 2; // (2n+2)

        while((this.heap[parentIndex] < this.heap[leftChildIndex]) 
               || (this.heap[parentIndex] < this.heap[rightChildIndex])
            )
        {
            let isRightGreater = this.heap[rightChildIndex] > this.heap[leftChildIndex];

            if(isRightGreater && this.heap[parentIndex] < this.heap[rightChildIndex]) {
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[rightChildIndex];
                this.heap[rightChildIndex] = temp;

                parentIndex = rightChildIndex;
            } else if(this.heap[parentIndex] < this.heap[leftChildIndex]) {
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[leftChildIndex];
                this.heap[leftChildIndex] = temp;

                parentIndex = leftChildIndex;
            }

            
            leftChildIndex = 2 * parentIndex + 1;
            rightChildIndex = 2 * parentIndex + 2;
        }

        return maxNode;
    }
}

const maxHeap = new BinaryMaxHeap();
maxHeap.add(41)
maxHeap.add(39)
maxHeap.add(33)
maxHeap.add(18)
maxHeap.add(27)
maxHeap.add(12)
maxHeap.add(55)
maxHeap.add(56)

maxHeap.getMax();
maxHeap.getMax();