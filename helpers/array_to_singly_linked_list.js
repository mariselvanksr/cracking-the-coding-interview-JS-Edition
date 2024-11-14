class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    // Initialize the head of the linked list
    const head = new ListNode(arr[0]);
    let current = head;

    // Iterate over the array to create and link each node
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}
