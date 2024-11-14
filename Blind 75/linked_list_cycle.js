function hasLinkedListHasCycle(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    while (fast) {
        if (!fast.next) {
            return false;
        } else {
            fast = fast.next.next;
            slow = slow.next;
        }

        if (fast === slow) {
            return true;
        }
    }

    return false;
}

const input = {
    "value": 1,
    "next": {
        "value": 2,
        "next": {
            "value": 3,
            "next": {
                "value": 4,
                "next": null
            }
        }
    }
}

console.log(hasLinkedListHasCycle(input));

input.next.next.next = input;

console.log(hasLinkedListHasCycle(input));
