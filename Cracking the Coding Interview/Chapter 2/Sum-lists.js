/**
 * You have two numbers represented in different linked list and both are in reverse order. You have to sum up both and return the total in a
 * new linked list.
 * 
 * For Example:
 * (7 -> 1 -> 6) +
 * (5 -> 9 -> 2)
 * --------------
 * (2 -> 1 -> 9)  // Reverse both list and add
 * --------------
 * 
 * If you see, when we do normal + we start from the right and carry if the value if it's greater than 9
 * 
 * 617 +
 * 295
 * 
 * 1. Add 7 + 5 = 12. We keep the 2 in a list and carry the 1 to next add.
 * 2. Add 1 + 9 + 1 (carry) = 11. Keep the 1 pass 1 as carry.
 * 3. Add 6 + 2 + 1 (carry) = 9
 * 4. Return final list as 2 -> 1 -> 9
 * 
 * Notes:
 *  Keep in mind some times we have to add different length digits. In that case pass 0 to add to the list.
 */

function addDigits(node1, node2, carry = 0) {
    if (node1 === null && node2 === null && carry == 0) {
        return 0;
    }

    let resultLinkedList = {data: 0, next: null};
    let value = carry;

    if (node1?.value) {
        value += node1.value;
    }

    if (node2?.value) {
        value += node2.value;
    }

    resultLinkedList.data = value % 10;
    carry = value >= 10 ? 1 : 0;

    if (node1.next !== null || node2.next !== null || carry) {
        resultLinkedList.next = addDigits(
                                    node1?.next ? node1.next : null,
                                    node2?.next ?  node2.next : null,
                                    carry
                                );
    }

    return resultLinkedList;
}

/**
 * But there is an issue here. If we have list like
 * 
 * 1 -> 3 -> 8 -> 2 + 
 * 5 -> 6 -> 1
 * 
 * In this case we have to add 5 with 3 not 1. The solution here is check the linked list length first if it's not equal pad addition 0's on the first.
 */

function sumDifferentDigitCountLinkedList(node1, node2) {
    // Assume you get the len from node1 and node 2

    let len_node_1 = node1.length;
    let len_node_2 = node2.length;

    if (len_node_1 > len_node_2) {
        node1 = padZeros(node2, len_node_1 - len_node_2);
    } else if (len_node_2 > len_node_1) {
        node2 = padZeros(node1, len_node_2 - len_node_1);
    }

    // Now both nodes have same length with 0 pad added.

    return addDigits(node1, node2);
}

function padZeros(head, len) {
    for(let i = 0; i < len; i++) {
        head = insertBefore(head, 0);
    }

    return head;
}

function insertBefore(targetNode, data) {
    let newNode = {
        data,
        next: null,
    };

    if(targetNode) {
        newNode.next = targetNode;
    }

    return newNode;
}