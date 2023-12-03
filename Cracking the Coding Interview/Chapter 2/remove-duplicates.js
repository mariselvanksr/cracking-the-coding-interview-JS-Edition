/**
 * Write code to remove duplicates in an unsorted array.
 * 
 * Follow Up: How would you solve the problem if an temporary buffer not allowed.
 */

/**
 * Using HashMap for finding duplicates
 * 
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 */

function removeDuplicatesInLikedList(node) {
    if(!node) return 'List Empty';

    let foundMap = {};
    let previousNode = node;

    while(node != null) {
        let nodeValue = node.value;

        if(foundMap[nodeValue]) {
            previousNode.next = node.next;
            node = previousNode.next;            
        } else {
            foundMap[nodeValue] = true;
            previousNode = node;
            node = node.next;
        }
    }
}

/**
 * What if extra space not allowed.
 * 
 * In this case we can't use hash map. So, we have to recursively loop and remove duplicates.
 * So, the space complexity will be O(1) and time complexity will be O(n^2).
 * This is not an optimal solution.
 */

function removeDuplicatesInLikedListWithoutExtraSpace(headNode) {
    if(!headNode) return 'List Empty';

    let currentNode = headNode;

    while(currentNode != null) {
        let runner = currentNode;

        while(runner.next != null) {
            if(currentNode.value === runner.next.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        currentNode = currentNode.next;
    }
}