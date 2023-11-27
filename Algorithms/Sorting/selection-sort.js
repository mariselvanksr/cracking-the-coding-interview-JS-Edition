/**
 * 1. Store the first element as a minimum element.
 * 2. Compare the rest of the array to find the minimum element.
 * 3. Swap the minimum value to start of the position.
 * 4. Start the same procedure from the next index.
 */

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let findMinIndex = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(min > arr[j]) {
                min = arr[j];
                findMinIndex = j;
            }
        }

        [arr[i], arr[findMinIndex]] = [arr[findMinIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort([6,3,7,12,34,1,3]))
