function insertIntervals(intervals, newInterval) {
    const result = [];
    let i = 0;
    const start = 0;
    const end = 1;

    while(i < intervals.length && intervals[i][end] < newInterval[start]) {
        result.push(intervals[i]);
        i++;
    }

    while( i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start])
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }

    result.push(newInterval);

    while(i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

console.log(insertIntervals([[1,2], [3,5], [6,7], [8,10], [12, 16]], [4, 8]));