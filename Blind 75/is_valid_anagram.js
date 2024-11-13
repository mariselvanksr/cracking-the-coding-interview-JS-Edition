function isValidAnagram(a, b) {
    const aMap = new Map();
    const bMap = new Map();

    for(let char of a) {
        if(aMap.has(char)) {
            aMap.set(char, aMap.get(char) + 1);
        } else {
            aMap.set(char, 1);
        }
    }

    for(let char of b) {
        if(bMap.has(char)) {
            bMap.set(char, bMap.get(char) + 1);
        } else {
            bMap.set(char, 1);
        }
    }

    for(let key of aMap.keys()) {
        if(bMap.has(key) && bMap.get(key) === aMap.get(key)) {
            continue;
        }

        return false;
    }

    for(let key of bMap.keys()) {
        if(aMap.has(key) && bMap.get(key) === aMap.get(key)) {
            continue;
        }

        return false;
    }

    return true;
}

console.log(isValidAnagram('atr', 'art'));
console.log(isValidAnagram('atrrr', 'arrtt'));
