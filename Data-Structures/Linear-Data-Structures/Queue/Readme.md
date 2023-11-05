# QUEUE

`Queue is an linear data structure works in FIFO (First In First Out) principle. It performs two basic operations like addition from the end and removal from the start.`

## Operations On Queue

**enqueue**<br/>
To add elements at the end of queue.

**dequeue**<br/>
To remove elements at the beginning of the queue.

**peek**<br/>
To get the front element without removing it.

**isEmpty**<br/>
To check whether the queue is empty or not.

**printQueue**<br/>
Print all elements in the queue.

## Time & Space Complexity

Queue can be implemented in two different approaches.

- Array
    Enqueue element - O(1) (if we keep track of last index)
    Dequeue element - O(n) (need to shift all the elements in the array after removing the first element)
    Peek - O(1)

    Space Complexity: O(n)

- Linked List
    Enqueue element - O(1) (if we keep track of last node)
    Dequeue element - O(1)
    Peek - O(1)

    Space Complexity: O(n)