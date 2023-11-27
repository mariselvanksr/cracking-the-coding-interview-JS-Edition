function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while(i < arr1.length || j < arr2.length) {
        let firstArrValue = arr1[i];
        let secondArrValue = arr2[j];

        if(firstArrValue === undefined) {
            mergedArray.push(arr2[j]);
            j++;
        } else if(secondArrValue === undefined) {
            mergedArray.push(arr1[i]);
            i++;
        } else if(firstArrValue < secondArrValue) {
            mergedArray.push(firstArrValue);
            i++;
        } else {
            mergedArray.push(secondArrValue);
            j++;
        }
    }

    return mergedArray;
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor((arr.length/2));
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([6,3,7,12,34,1,3]))