const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8')
    const lines = text.split('\n').map(txt => txt.trim());
    
    let count = 0;

    lines.forEach(data => {
        count += getNumberFromString(data);
    });
    
    console.log(count)
}

function getNumberFromString(str) {
    let left = '';
    let right = '';
    let finalString = '';
    let start = 0;
    let end = str.length - 1;

    while(start <= end && (!left || !right)) {
        if(!left && parseInt(str[start]).toString() !== 'NaN') {
            left = str[start];
        } else if(!left) {
            start++;
        }

        if(!right && parseInt(str[end]).toString() !== 'NaN') {
            right = str[end];
        } else if(!right) {
            end--;
        }
    }

    finalString = left + right;

    return finalString !== '' ?  parseInt(finalString) : 0;
}

main();