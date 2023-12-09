/**
 *    Intersection: Given two(singly) linked list determine those are intersect. Return the
 * intersection node. Intersection should be defined by using same reference node not value.
 * 
 * Ex: If i'th node of list 1 is refer the same node in j'th node in 2 list means those are intersecting and the point of intersection will be the intersection node.
 */

/**
 * If two list are intersecting in some point the tail node will be equal.
 * And if we know the length of l1 and l2 we can start the loop from in the same position of l1 and l2 and keep moving to the next if nodes are same in any point that's the intersection node.
 */

function isIntersectionList(node1, node2) {
    let l1_length = 0;
    let l2_length = 0;
    let l1_tailNode = null;
    let l2_tailNode = null;
    let n1 = node1;
    let n2 = node2;

    while(n1 != null) {
        l1_length++;
        l1_tailNode = n1;
        n1 = n1.next;
    }

    while(n2 != null) {
        l2_length++;
        l2_tailNode = n2;
        n2 = n2.next;
    }

    /**
     * Now we know tailNode of node1 and node2. If both are not same return now because those are not intersecting.
     */

    if(l1_tailNode !== l2_tailNode) {
        return false;
    }

    /**
     * If length of both list are not same we have adjust the list in a way that both are start from the same. For ex, l1 length is 8 and l2 is 6, in this case we have to start the l1 from 3 then only both lengths are same and we can find the intersection node.
     */

    if(l1_length > l2_length) {
        let difference = l1_length - l2_length;

        while(difference) {
            node1 = node1.next;
            difference--;
        }
    }

    if(l2_length > l1_length) {
        let difference = l2_length - l1_length;

        while(difference) {
            node2 = node2.next;
            difference--;
        }
    }

    while(node1 !== node2) {
        node1 = node1.next;
        node2 = node2.next;
    }

    // Since it's intersection you can return node1 or node2 both points to the same node.
    return node1;
}