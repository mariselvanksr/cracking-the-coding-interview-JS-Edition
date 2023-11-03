class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class CircularSinglyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
        this.lastNode = null;
	}

	add(data) {
		const node = new Node(data);

		if(this.head === null) {
			this.head = node;
            node.next = this.head;
            this.lastNode = node;
		} else {
			let currentNode = this.head;

			do {
				currentNode = currentNode.next;
			} while(currentNode.next !== this.head);

			currentNode.next = node;
            node.next = this.head;
            this.lastNode = node;
		}

		this.size++;
	}

	insertAt(data, index) {
		const node = new Node(data);

		if(index < 0 && index > this.size) return console.error('Please specify valid index');


		if(index == 0) {
			node.next = this.head;
			this.head = node;
            
            if(this.lastNode) this.lastNode.next = this.head;
		} else {
			let currentNode = this.head;
			let previousNode = null;

			let startIndex = 0;

			while(startIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;

				startIndex++;
			}

			previousNode.next = node;
			node.next = currentNode;
		}

		this.size++;
	}

	removeAt(index) {
		if(index < 0 && index > this.size) return console.error('Please specify valid index');

		if(index == 0) {
			this.head = this.head.next;
			this.lastNode.next = this.head;
		} else {
			let currentNode = this.head;
			let previousNode = null;

			let startIndex = 0;

			while(startIndex < index) {
				startIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}

		this.size--;
	}

	removeElement(data) {
		let currentNode = this.head;
		let previousNode = null;

		let isFound = false;

		do {
			if(currentNode.data === data) {
				isFound = true;
				
				break;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		} while((!isFound && currentNode != this.head))

		if(!isFound) return console.error('Data not found in the list');

		if(currentNode != this.head) {
			previousNode.next = currentNode.next;
		} else {
			this.head = this.head.next;
			this.lastNode.next = this.head;
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

		do {
			data += current.data +',';
			current = current.next;
		} while (current != this.head)

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

const circularSinglyLinkedList = new CircularSinglyLinkedList();

// Add values

circularSinglyLinkedList.add(23);
circularSinglyLinkedList.add(45);
circularSinglyLinkedList.add(12);
circularSinglyLinkedList.add(78);

circularSinglyLinkedList.print();

console.log(circularSinglyLinkedList.size_of());

// Remove Value based on index

circularSinglyLinkedList.removeAt(1);

circularSinglyLinkedList.print();

console.log(circularSinglyLinkedList.size_of());

// Element not found
circularSinglyLinkedList.removeElement(44);

// Element in list - middle
circularSinglyLinkedList.removeElement(12);

circularSinglyLinkedList.print();

console.log(circularSinglyLinkedList.size_of());

// Element in list - start
circularSinglyLinkedList.removeElement(23);

circularSinglyLinkedList.print();

console.log(circularSinglyLinkedList.size_of());

// check is empty

console.log(circularSinglyLinkedList.isEmpty())

// push check

circularSinglyLinkedList.push(44)
circularSinglyLinkedList.push(89)
circularSinglyLinkedList.push(23)

circularSinglyLinkedList.print();
console.log(circularSinglyLinkedList.size_of());

circularSinglyLinkedList.pop();
circularSinglyLinkedList.print();
console.log(circularSinglyLinkedList.size_of());
circularSinglyLinkedList.pop();
circularSinglyLinkedList.print();
console.log(circularSinglyLinkedList.size_of());circularSinglyLinkedList.pop();
circularSinglyLinkedList.print();
console.log(circularSinglyLinkedList.size_of());circularSinglyLinkedList.pop();
circularSinglyLinkedList.print();
console.log(circularSinglyLinkedList.size_of());

circularSinglyLinkedList.push(44)
circularSinglyLinkedList.push(89)
circularSinglyLinkedList.push(23)
circularSinglyLinkedList.print();

circularSinglyLinkedList.unshift(90)
circularSinglyLinkedList.print();

circularSinglyLinkedList.unshift(87)
circularSinglyLinkedList.print();

circularSinglyLinkedList.shift();
circularSinglyLinkedList.print();
