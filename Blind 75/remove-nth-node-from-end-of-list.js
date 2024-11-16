function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

function removeNthNode(head, n) {
    let dummyNode = new ListNode(0, null);
    dummyNode.next = head;
    let left = dummyNode;
    let right = head;

    while(n > 0 && right) {
        right = right.next;
        n--;
    }

    while(right) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return dummyNode.next;
}

const input = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

console.log(removeNthNode(input, 2))