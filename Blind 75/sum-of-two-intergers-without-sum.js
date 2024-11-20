function sum(a, b) {
    let carry = 0;

    while(b!==0) {
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    return a;
}

console.log(sum(2,2))
console.log(sum(38,38))
