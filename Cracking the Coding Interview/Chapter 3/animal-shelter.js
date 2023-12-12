/**
 * An animal shelter which holds dogs and cats, strictly operates first in first out. So, oldest 
 * will go out. People can choose the oldest animal or dog or cat. In which case the oldest dog or
 * cat will got out first.
 */

/**
 * Solution:
 * 
 * 1. We can use Queue data structure with linked list implementation.
 * 2. Create a node which holds the animal type as value and next node.
 * 3. We are going to use singly linked list for our purpose.
 */

class Node {
    constructor(value, type) {
        this.value = value;
        this.type = type;
        this.next = null;
    }
}

class AnimalShelter {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(name, animalType) {
        let animal = new Node(name, animalType);

        if(!this.head) {
            this.head = animal;
            this.tail = this.head;

            return;
        }

        this.tail.next = animal;
        this.tail = this.tail.next;
    }

    // Returns which animal comes first
    dequeue() {
        if(!this.head) return 'No animals present in the shelter';

        let firstAnimal = this.head;
        this.head = this.head.next;
        firstAnimal.next = null;

        return firstAnimal;
    }

    // Return first dog or cat
    dequeueAnimalByType(animalType) {
        if(!this.head) return 'No animals present in the shelter';
        let previousNode = null;
        let node = this.head;

        while(node.type !== animalType) {
            previousNode = node;
            node = node.next;
        }

        if(node.type !== animalType) return `No ${animalType} present in the shelter.`

        // If previousNode empty that's the first node
        if(!previousNode) {
            let animalNode = node;
            this.head = this.head.next;
            animalNode.next = null;

            return animalNode;
        }

        let animalNode = node;
        previousNode.next = node.next;
        animalNode.next = null;

        return animalNode;
    }
}

let shelter = new AnimalShelter();

shelter.enqueue('Raj', 'dog')
shelter.enqueue('Yu', 'cat')
shelter.enqueue('mark', 'dog')

console.log(shelter.dequeue())
console.log(shelter.dequeueAnimalByType('dog'))
console.log(shelter.dequeueAnimalByType('cat'))
console.log(shelter.dequeueAnimalByType('cat'))
console.log(shelter.dequeue())