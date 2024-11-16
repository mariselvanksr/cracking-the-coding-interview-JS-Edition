function mergeSortedLinkedList(l1, l2) {
    let dummyNode = {
        val: 0,
        next: null
    }

    let currentNode = dummyNode;

    while (l1 || l2) {
        if (!l1 && l2) {
            currentNode.next = l2;
            break;
        }

        if (l1 && !l2) {
            currentNode.next = l1;
            break;
        }

        if (l1.val < l2.val) {
            let tempNode = l1.next;
            l1.next = null;
            currentNode.next = l1;
            l1 = tempNode;
        } else {
            let tempNode = l2.next;
            l2.next = null;
            currentNode.next = l2;
            l2 = tempNode;
        }

        currentNode = currentNode.next;
    }

    return dummyNode.next;
}

const l1 = {
    "val": 1,
    "next": {
        "val": 2,
        "next": {
            "val": 4,
            "next": null
        }
    }
}

const l2 = {
    "val": 3,
    "next": {
        "val": 5,
        "next": null
    }
};

console.log(mergeSortedLinkedList(l1, l2));