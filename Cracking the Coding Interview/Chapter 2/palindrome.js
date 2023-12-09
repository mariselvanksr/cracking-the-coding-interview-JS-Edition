/**
 * Write a function to check whether the linked list is palindrome or not.
 */

/**
 * Solution 1: Reverse and compare linked list
 */

function reverseLinkedList(node) {
    let tail = null;

    while(node != null) {
        let cloneNode = structuredClone(node);
        cloneNode.next = null;

        if(tail) {
            cloneNode.next = tail;
            tail = cloneNode;
        }

        node = node.next;
    }

    return tail;
}

function checkPalindrome(node) {
    let reverseList = reverseLinkedList(node);

    while(node.next !== null && reverseList.next !== null) {
        if(node.data !== reverseList.data) {
            return false
        }

        node = node.next;
        reverseList = reverseList.next;
    }

    return true;
}

/**
 * Iterative Approach using fast and slow runner technique.
 * 
 * If you know the size of the linked list you can simply push the first half into an stack and 
 * compare the second half with the linked list by pop each item from the stack.
 * 
 * Else we can use the fast and slow runner idea, where fast pointer jumps two node at a time and slow node jumps only one node and when fast node hits end we know the node in the mid. But if it's odd count we have to handle that as well.
 */

function checkPalindromeUsingFastAndSlow(node) {
    let fast = node;
    let slow = node;
    let stack = [];

    while(fast != null && fast.next != null) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    /** 
     * If it's odd count fast will be never an null. Do your own calculation :) 
     * In this case we are not comparing the middle node.
     * */
    if (fast != null) {
        slow = slow.next;
    }

    while(slow != null) {
        let data = slow.data;

        if(stack.pop() !== data) {
            return false;
        }

        slow = slow.next;
    }

    return true;
}