function isValidParatheses(str) {
    let stack = [];

    for(let char of str) {
        console.log(stack)
        if(char === ')' && stack.pop() !== '(') {
            return false;
        } else if(char === ']' && stack.pop() !== '[') {
            return false;
        }else if(char === '}' && stack.pop() !== '{') {
            return false;
        } else if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValidParatheses('()[]{}'))
console.log(isValidParatheses('([{}]){([])}'))
console.log(isValidParatheses('{(}[{}]){([])}'))