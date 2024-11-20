function wordBreak(s, words) {
    const visited = new Set();
    const set = new Set(words);

    let queue = [0]

    while(queue.length) {
        let current = queue.shift();

        if(!visited.has(current)) {
            for(let i = current+1; i<=s.length; i++) {
                if(set.has(s.slice(current, i))) {
                    if( i === s.length) {
                        return true;
                    }
                }

                queue.push(i);
            }

            visited.add(current)
        }
    }

    return false;
}

console.log(wordBreak('applepenapple', ['apple', 'pen']));