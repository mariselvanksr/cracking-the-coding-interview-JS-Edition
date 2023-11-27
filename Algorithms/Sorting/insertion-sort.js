function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];

        let j = i-1;

        for(; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentValue;
    }

    return arr;
}

console.log(insertionSort([4,1,3,5,7,1,10,6,12,11]));