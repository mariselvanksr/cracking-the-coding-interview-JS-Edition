/**
 * Write an algorithm to delete an middle node from an singly linked list. You will be given 
 * access to only that node.
 */

function deleteNodeInLinkedList(nodeToDelete) {
    if(nodeToDelete === null || nodeToDelete.next === null) return false;

    let nextNode = nodeToDelete.next;

    nodeToDelete.value = nextNode.value
    nodeToDelete.next = nextNode.next;

    return true;
}