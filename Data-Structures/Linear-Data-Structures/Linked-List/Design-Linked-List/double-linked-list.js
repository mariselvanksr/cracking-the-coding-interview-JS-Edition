class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
        this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	add(data) {
		const node = new Node(data);

		if(this.head === null) {
			this.head = node;
		} else {
			let currentNode = this.head;

			while(currentNode.next != null) {
			    currentNode = currentNode.next;
			}

            node.previous = currentNode;
			currentNode.next = node;
		}

		this.size++;
	}

	insertAt(data, index) {
		const node = new Node(data);

		if(index < 0 && index > this.size) return console.error('Please specify valid index');


		if(index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			let currentNode = this.head;
			let previousNode = null;

			let startIndex = 0;

			while(startIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;

				startIndex++;
			}

            node.next = currentNode;
            node.previous = previousNode;
            currentNode.previous = node;
            previousNode.next = node;
		}

		this.size++;
	}

	removeAt(index) {
		if(index < 0 && index > this.size) return console.error('Please specify valid index');

		if(index == 0) {
			this.head = this.head.next;
            this.head.previous = null;
		} else {
			let currentNode = this.head;
			let previousNode = null;

			let startIndex = 0;

			while(startIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;
                startIndex++;
			}

			previousNode.next = currentNode.next;

            if(currentNode.next) {
                currentNode.next.previous = previousNode;
            }
		}

		this.size--;
	}

	removeElement(data) {
		let currentNode = this.head;
		let previousNode = null;

		let isFound = false;

		while(!isFound && currentNode != null) {
			if(currentNode.data === data) {
				isFound = true;
				break;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		if(!isFound) return console.error('Data not found in the list');

		if(previousNode == null) {
			this.head = currentNode.next;
            this.head.previous = null;
		} else {
			previousNode.next = currentNode.next;
            currentNode.next.previous = previousNode;
		}

		this.size--;
	}

	indexOf(data) {
		let currentNode = this.head;
		let index = 0;

		let isFound = false;

		while(!isFound) {
			if(currentNode.data === data) {
				isFound = true;

				break;
			};

			index++;
			currentNode = currentNode.next;

		}

	 	return isFound ? index : -1;
	}

	isEmpty() {
		return this.head === null;
		//			(or)
		// return !!this.size;
	}

	size_of() {
		return this.size;
	}

	print() {
		let current = this.head;
		let data = "";

		while(current != null) {
			data += current.data +',';
			current = current.next;
		}

		console.log(data || 'List is Empty');
	}

	// implement array functions

	push(data) {
		this.add(data);
	}

	unshift(data) {
		this.insertAt(data, 0)
	}

	pop() {
		this.removeAt(this.size - 1);
	}

	shift() {
		this.removeAt(0);
	}
}


/**
 * Basic test for all the operations written in Single Linked List
 */

// Creation of Linked List

const doublyLinkedList = new DoublyLinkedList();

// Add values

doublyLinkedList.add(23);
doublyLinkedList.add(45);
doublyLinkedList.add(12);
doublyLinkedList.add(78);

doublyLinkedList.insertAt(675, 2);

doublyLinkedList.print();

console.log(doublyLinkedList.size_of());

// Remove Value based on index

doublyLinkedList.removeAt(1);

doublyLinkedList.print();

console.log(doublyLinkedList.size_of());

// Element not found
doublyLinkedList.removeElement(44);

// Element in list - middle
doublyLinkedList.removeElement(12);

doublyLinkedList.print();

console.log(doublyLinkedList.size_of());

// Element in list - start
doublyLinkedList.removeElement(23);

doublyLinkedList.print();

console.log(doublyLinkedList.size_of());

// check is empty

console.log(doublyLinkedList.isEmpty())

// push check

doublyLinkedList.push(44)
doublyLinkedList.push(89)
doublyLinkedList.push(23)

doublyLinkedList.print();
console.log(doublyLinkedList.size_of());

doublyLinkedList.pop();
doublyLinkedList.print();
console.log(doublyLinkedList.size_of());
doublyLinkedList.pop();
doublyLinkedList.print();
console.log(doublyLinkedList.size_of());doublyLinkedList.pop();
doublyLinkedList.print();
console.log(doublyLinkedList.size_of());doublyLinkedList.pop();
doublyLinkedList.print();
console.log(doublyLinkedList.size_of());

doublyLinkedList.push(44)
doublyLinkedList.push(89)
doublyLinkedList.push(23)
doublyLinkedList.print();

doublyLinkedList.unshift(90)
doublyLinkedList.print();

doublyLinkedList.unshift(87)
doublyLinkedList.print();

doublyLinkedList.shift();
doublyLinkedList.print();
