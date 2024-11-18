function mergeIntervals(intervals) {
    // We need to sort based on start time to compare the overlapping
    const start = 0;
    const end = 1;

    intervals = intervals.sort((a, b) => a[start] - b[start]);

    let previous = intervals[0];
    const result = [previous];

    for(let current of intervals) {
        if(current[start] <= previous[end]) {
            previous[end] = Math.max(current[end], previous[end])
        } else {
            result.push(current);
            previous = current;
        }
    }

    return result;
}


const intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(mergeIntervals(intervals));