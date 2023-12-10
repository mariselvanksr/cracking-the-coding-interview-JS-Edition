/**
 * Given a circular linked list implement an algorithm to detect the beginning of the loop.
 * 
 * Ex: A -> B -> C -> D -> E -> F -> C
 * 
 * Here, C is the node which starts the loop.
 */

/**
 * Solution:
 *  We can solve this by using fastRunner, slowRunner method.
 * 
 * 1. Start the fast and slow runner from the beginning of the loop. Assume list length is LOOP_LEN
 * 2. Move slow runner at 1 step at a time.
 * 3. Move fast runner at 2 step at a time.
 * 4. Both fast and slow runner will collide at LOOP-LEN - k. K is the length that slow runner position from head node.
 * 5. Stop this operation after you found the node.
 * 6. Move the slow node at beginning of the loop.
 * 7. Move fast and slow runner at 1 step at a time.
 * 8. Now return the colliding node. They will exactly collide at the start of the loop
 */

function findCollision(head) {
    let slowRunner = head.next;
    let fastRunner = head.next.next;

    while(fastRunner !== slowRunner) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // if there is no meeting point at one time fastRunner will be null
        if(fastRunner === null || fastRunner.next === null) {
            return null;
        }
    }

    slowRunner = head;

    while(slowRunner !== fastRunner) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next;
    }

    return fastRunner;
}