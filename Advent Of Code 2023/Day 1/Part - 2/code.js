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

function convertStringToNumber(str) {
    const number_dic = {
        'one': 'o1e',
        'two': 't2o',
        'three': 't3ree',
        'four': 'f4ur',
        'five': 'f5ve',
        'six': 's6x',
        'seven': 's7ven',
        'eight': 'e8ght',
        'nine': 'n9ne',
    };
    
    // since the max window for number dic is 5 and min is 3 we can create a window from 3 to 5
    // and check the string is present in the dictionary.

    let start = 0;
    let end = 3;

    while(end <= str.length) {
        let threeLetterWindow = str.slice(start, end);
        let fourLetterWindow = str.slice(start, end+1);
        let fiveLetterWindow = str.slice(start, end+2);

        if(number_dic[threeLetterWindow]) {
            str = str.replace(threeLetterWindow, number_dic[threeLetterWindow]);
        } else if(number_dic[fourLetterWindow]) {
            str = str.replace(fourLetterWindow, number_dic[fourLetterWindow]);
        } else if(number_dic[fiveLetterWindow]) {
            str = str.replace(fiveLetterWindow, number_dic[fiveLetterWindow]);
        }

        start++;
        end++;
    }

    return str;
}

function getNumberFromString(_str) {
    let str = convertStringToNumber(_str);
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