/**
    SLL - Rotate Exercise

    This function should rotate all the nodes in the list by some number passed in. 
    For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, 
    the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be 
    any integer. Time Complexity: O(N), where N is the length of the list.

    Space Complexity: O(1)
*/

/**
 * Assume we don't know tail
 * @param {*} head 
 * @param {*} nToRotate 
 */

function linkedListRotator(head, nToRotate) {
    let node = head;
    let tailNode = null;
    let splitNode = null;

    while(node != null) {
        if(node.value === nToRotate) {
            splitNode = node;
        }

        tailNode = node;
        node = node.next;
    }

    // Split Node Becomes Last Node
    splitNode.next = null;
    // Attach the head to tail node
    tailNode.next = head;
}