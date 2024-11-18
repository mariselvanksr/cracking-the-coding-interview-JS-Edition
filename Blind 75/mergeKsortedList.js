function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

// Take every 2 list and merge since those are already sorted
function getMergeSortedList(lists) {
    if(!lists) return null;

    while(lists.length > 1) {
        let list1 = lists.shift();
        let list2 = lists.shift();

        let mergedList = mergeLists(list1, list2);

        lists.push(mergedList);
    }

    // end we have [[]] since all merged into an single list
    return lists[0];
}

function mergeLists(list1, list2) {
    let dummyNode = new ListNode(0);
    let head = dummyNode;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            dummyNode.next = list1;
            list1 = list1.next;
        } else {
            dummyNode.next = list2;
            list2 = list2.next;
        }

        dummyNode = dummyNode.next;
    }

    if(list1) {
        dummyNode.next = list1;
    } else if(list2) {
        dummyNode.next = list2;
    }

    return head.next;
}

const list_1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val:4,
            next: null
        }
    }
};

const list_2 = {
    val: 3,
    next: {
        val: 5,
        next: {
            val:7,
            next: null
        }
    }
}


const list_3 = {
    val: 2,
    next: {
        val: 5,
        next: {
            val:8,
            next: {
                val: 9,
                next: {
                    val: 11,
                    next: null
                }
            }
        }
    }
}

const arr = [list_1, list_2, list_3];

console.log(getMergeSortedList(arr));