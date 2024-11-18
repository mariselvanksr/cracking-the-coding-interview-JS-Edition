function canAttenedMeetings(intervels) {
    if(intervels.length <= 1) {
        return intervels;
    }

    intervels = intervels.sort((a, b) => a[0] - b[0]);
    let start = 0;
    let end = 1;
    let previous = intervels[0];

    for(let current = 1; current < intervels.length; current++) {
        if(previous[end] >= intervels[current][start]) {
            return false;
        } else {
            previous = intervels[current];
        }
    }
    
    return true;
}

console.log(canAttenedMeetings([[0,30], [5,10], [15,20]]))
console.log(canAttenedMeetings([[0,30], [35,40], [45,50]]))
