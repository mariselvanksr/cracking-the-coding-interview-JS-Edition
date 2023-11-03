# STACK

```
    A stack is a linear data structure in which insertion of a new element and removal of an existing element takes place in the same end represented as the top of the stack
```

<img src="./assets/Stack-660x566.png" alt="Stack Representation">

## LIFO

```
    The element that was inserted at last as come out first (LAST IN FIRST OUT). (i.e) Take pile of plates kept on top of each other. The plate will put in last will always be removed at first. JS engine also uses STACK to push the functions which are ready for execution.
```

## Operations On STACK

- PUSH
    
    *Adds new item on top of the stack. If stack is full this will lead to StackOverFlow condition. (i.e) When you run recursion which doesn't have an end point, JS engine throws this error.*

- POP

    *Removes the last element in the stack. (i.e) JS engine will take the last commend placed in the stack for the execution. Time complexity **O(1)***

- TOP

    *Returns the top of the element in the stack. Time complexity **O(1)***

- isEMPTY

    *Returns whether the stack is empty or not. Time complexity **O(1)***

- SIZE

    *Returns the size of the stack. Time complexity **O(1)***


## Types of STACKS

**Fixed Size Stack:**<br/>

The fixed size stack can't grow or shrink in size dynamically. If the stack is full and if you try to push one more elements this will throw on overflow error.

*Implementation with Array Data Structure* 

**Dynamic Size Stack:**<br/>

As the name suggest the size of the stack is dynamic. It can grow and shrink dynamically. When the stack is full it automatically increases it's size to accommodate new elements. And when the stack is empty, it decrease the size.

*Implementation with ArrayList, LinkedList, Vector*

## Usage of STACK

- Used for undo/redo operations
- Forward/Backward features in browser
- Used as a base for many algorithms like Tower of Hanoi, Tree Traversal
- Memory management for systems.
- Implementation of function call in computers

