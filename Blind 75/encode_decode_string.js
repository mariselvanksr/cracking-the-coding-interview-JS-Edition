function encode(arr) {
    if(!arr.length) return '';

    let accumlator = '';

    for(let str of arr) {
        accumlator += `${str.length}#${str}`
    }

    return accumlator;
}

function decode(str) {
    if(!str) return [];

    let result = [];
    let count = '';
    let length = str.length;

    for(let i = 0; i < length;) {
        if(str[i] === '#') {
            count = parseInt(count);
            result.push(str.slice(i+1, count+i+1))
            i = i + count + 1;
            count = '';
        } else {
            count += str[i];
            i++;
        }
    }

    return result;
}

const encodeVal = encode(['hello',' ,my', ' name', ' is', ' Mari']);
console.log(encodeVal);
console.log(decode(encodeVal))