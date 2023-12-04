/**
 * Write an algorithm to find kth to last element in an singly linked list.
 * 
 * Questions:
 *  1. Did the linked list size is know?
 *      If yes, then our return element should be length - kth element. 
 *  If that's positive we can return the value at the position. If the result is 
 *  negative that means we have to return an not found.
 */

/**
 * 
 * @param {*} head 
 * @param {*} kth 
 * @param {*} length 
 * @returns
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findKthToLastWithKnownLength(head, kth, length) {
    let elementIndexToReturn = length - kth;

    if(elementIndexToReturn < 0) return 'Not Found';

    for(let i = 0; i < elementIndexToReturn; i++) {
        head = head.next;
    }

    return head;
}

/**
 * What if the length is unknown?
 */

function findKthToLastWithUnKnownLength(head, kth) {
    let p1 = head;
    let p2 = head;

    /**
     * If we don't know the length we need to traverse just traverse the first pointer
     * to kth index from 0 to kth. The remaining length is that the one we have to traverse
     * from the last.
     */

    for(let i = 0; i < k; i++) {
        if(p1 === null) return 'Not Found';

        p1 = p1.next;
    }

    /**
     * Move the element p1 and p2 at the same time when p1 reaches the end the p2 value will be the
     * last to kth position.
     */

    while(p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2;
}