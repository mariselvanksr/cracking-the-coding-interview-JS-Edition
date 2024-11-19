function eraseOverlappingIntervals(intervals) {
    let track = 0;
    const start = 0;
    const end = 1;
    
    intervals.sort((a, b) => a[end] - b[end]);

    let previous = intervals[0];
    let currentIndex = 1;

    while(currentIndex < intervals.length) {
        const current = intervals[currentIndex];

        if(previous[end] > current[start]) {
            track++;
        } else {
            previous = current;
        }

        currentIndex++;
    }

    return track;
}

console.log(eraseOverlappingIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlappingIntervals([[1,2],[1,2],[1,2]]));
