function groupAnagram(values) {
    /**
     * Tip: Instead of sorting we can use another methode like counting char in str and have it an array
     * and use that as a key in map
     * For Ex:
     *   => Have array of 26 as length
     *   => since it's small case char.charCodeAt(0) - 'a'.charCodeAt(0) will give an index from 0 to 25
     *   => put count in the array like arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
     *   => join the array with .join('') and use it as a key.
     *   => If key present push it else create an array and push it.
     *   => return values.
     */

    const sortedArray = values.map(str => str.split('').sort().join(''));
    const anagramMap = new Map();

    for(let i = 0; i < sortedArray.length; i++) {
        if(anagramMap.has(sortedArray[i])) {
            anagramMap.set(sortedArray[i], [...anagramMap.get(sortedArray[i]), values[i]]);
        } else {
            anagramMap.set(sortedArray[i], [values[i]]);
        }
    }

    return anagramMap.values();
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));