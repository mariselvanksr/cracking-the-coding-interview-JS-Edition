/**
 * Write a function to check whether 2 string are anagrams or not.
 * 
 * Anagram means a word, phrase are letter rearranged in a format with same letters present in both words.
 * 
 * Ex: cinema, iceman
 */

function anagramAnalyser(s1, s2) {
    let s1_map = {};
    let s2_map = {};

    for(let letter of s1) {
        s1_map[letter] = s1_map[letter] || 0;

        s1_map[letter] = ++s1_map[letter];
    }

    for(let letter of s2) {
        s2_map[letter] = s2_map[letter] || 0;

        s2_map[letter] = ++s2_map[letter];
    }

    // check if s1 keys and s2 keys are same and count as well

    for(let key in s1_map) {
        if(!(s1_map[key] === s2_map[key])) return false;
    }

    for(let key in s2_map) {
        if(!(s2_map[key] === s1_map[key])) return false;
    }

    return true;
}

console.log(anagramAnalyser('cinema', 'iceman'))