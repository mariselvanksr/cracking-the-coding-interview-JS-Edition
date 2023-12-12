/**
 * create an stack where the highest element should be top and lowest elements at the bottom.
 * You can use additional stack to achieve this.
 */

/**
 * 1. Create a sort function which accepts and stack (s1).
 * 2. Create an temporary stack init.
 * 3. PopOut last element in s1.
 * 4. Compare with top element in temp and check whether it's greater or not.
 * 5. If not lesser than the last element pop and push it into s1.
 * 6. Finally add the temp pop element into temp stack.
 * 7. Repeat this until s1 is empty.
 * 8. At end copy all the element in temp into s1
 */


function sortWithStack(s1) {
    let tempStack = [];

    while(s1.length) {
        let topS1 = s1.pop();

        // assume at(-1) as peek it will return last element without removing it.
        while(tempStack.length && topS1 > tempStack.at(-1)) {
            s1.push(tempStack.pop());
        }

        tempStack.push(topS1);
    }


    while(tempStack.length) {
        s1.push(tempStack.pop());
    }

    return s1;
}

console.log(sortWithStack([7,3,5,6,10]));