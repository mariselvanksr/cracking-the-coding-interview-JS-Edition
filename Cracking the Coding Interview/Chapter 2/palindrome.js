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