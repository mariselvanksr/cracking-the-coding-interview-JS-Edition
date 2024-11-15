function reverseLinedList(head) {
    let newList = null;

    while (head) {
        let temp = head.next;
        head.next = newList;
        newList = head;
        head = temp;
    }

    return newList;
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

console.log(reverseLinedList(input));