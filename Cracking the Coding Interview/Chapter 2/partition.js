/**
 * Write a code to partition a linked list in a way that the values less than x comes before that and values greater than
 * comes after it.
 * 
 * Sample Input: 3 -> 5 -> 8 -> 10 -> 1 -> 2
 * Sample Output: 3 -> 1 -> 2 -> 5 -> 8 -> 10
 * 
 * Here, if you see that the values less than X are moved to before x and greater values are next after x.
 * 
 * Solution 1:
 *  1. We can create 2 linked list before and after.
 *  2. Loop the existing list and store it in before and after list.
 *  3. Merge the list at the end like before.next -> after
 *  4. Return the result.
 */

function partitionLinkedList(node, x) {
    let beforeNodeHead = null;
    let beforeNodeTail = null;
    let afterNodeHead = null;
    let afterNodeTail =null;

    while(node != null) {
        let nodeValue = node.value;

        if (nodeValue < x) {
            if(beforeNodeHead === null) {
                beforeNodeHead = node;
                beforeNodeTail = beforeNodeHead;
            } else {
                beforeNodeTail.next = node;
                beforeNodeTail = node;
            }
        } else {
            if (afterNodeHead === null) {
                afterNodeHead = node;
                afterNodeTail = afterNodeHead;
            } else {
                afterNodeTail.next = node;
                afterNodeTail = node;
            }
        }

        node = node.next;
    }

    if (beforeNodeHead === null) {
        return afterNodeHead;
    }

    // Merge before and after values
    beforeNodeTail.next = afterNodeHead

    return beforeNodeHead;
}