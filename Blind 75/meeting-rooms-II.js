function minMeetingRooms(intervals) {
    if(!intervals || intervals.length < 1) {
        return 0;
    }

    if(intervals.length === 1) {
        return 1;
    }

    let startValues = [];
    let endVales = [];

    for(let interval of intervals) {
        startValues.push(interval[0]);
        endVales.push(interval[1]);
    }

    startValues.sort((a,b) => a - b);
    endVales.sort((a,b) => a - b);

    let startValueIndex = 0;
    let endValueIndex = 0;
    let roomCount = 0;

    while(startValueIndex < startValues.length && endValueIndex < endVales.length) {
        if(startValues[startValueIndex] < endVales[endValueIndex]) {
            roomCount++;
            startValueIndex++;
        } else {
            endValueIndex++;
        }
    }

    return roomCount;
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));