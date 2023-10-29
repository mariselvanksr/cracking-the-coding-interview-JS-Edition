class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
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
			let previousNode = this.head;

			let startIndex = 0;

			while(startIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;

				startIndex++;
			}
		}

		this.size++;
	}

	removeAt(index) {
		if(index < 0 && index > this.size) return console.error('Please specify valid index');

		if(index == 0) {
			this.head = this.head.next;
		} else {
			let currentNode = this.head;
			let previousNode = null;

			let startIndex = 0;

			while(startIndex != index) {
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
		} else {
			previousNode.next = currentNode.next;
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

const singlyLinkedList = new SinglyLinkedList();

// Add values

singlyLinkedList.add(23);
singlyLinkedList.add(45);
singlyLinkedList.add(12);
singlyLinkedList.add(78);

singlyLinkedList.print();

console.log(singlyLinkedList.size_of());

// Remove Value based on index

singlyLinkedList.removeAt(1);

singlyLinkedList.print();

console.log(singlyLinkedList.size_of());

// Element not found
singlyLinkedList.removeElement(44);

// Element in list - middle
singlyLinkedList.removeElement(12);

singlyLinkedList.print();

console.log(singlyLinkedList.size_of());

// Element in list - start
singlyLinkedList.removeElement(23);

singlyLinkedList.print();

console.log(singlyLinkedList.size_of());

// check is empty

console.log(singlyLinkedList.isEmpty())

// push check

singlyLinkedList.push(44)
singlyLinkedList.push(89)
singlyLinkedList.push(23)

singlyLinkedList.print();
console.log(singlyLinkedList.size_of());

singlyLinkedList.pop();
singlyLinkedList.print();
console.log(singlyLinkedList.size_of());
singlyLinkedList.pop();
singlyLinkedList.print();
console.log(singlyLinkedList.size_of());singlyLinkedList.pop();
singlyLinkedList.print();
console.log(singlyLinkedList.size_of());singlyLinkedList.pop();
singlyLinkedList.print();
console.log(singlyLinkedList.size_of());

singlyLinkedList.push(44)
singlyLinkedList.push(89)
singlyLinkedList.push(23)
singlyLinkedList.print();

singlyLinkedList.unshift(90)
singlyLinkedList.print();

singlyLinkedList.unshift(87)
singlyLinkedList.print();

singlyLinkedList.shift();
singlyLinkedList.print();
