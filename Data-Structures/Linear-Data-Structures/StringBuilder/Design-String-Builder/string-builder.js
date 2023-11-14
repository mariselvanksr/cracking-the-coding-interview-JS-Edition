class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(string) {
        this.strings.push(string);
    }

    join(joinString = '') {
        return this.strings.join(joinString);
    }

    clear() {
        this.strings = [];
    }
}

let testBuilder = new StringBuilder();

testBuilder.append('Hi');
testBuilder.append(',');
testBuilder.append('i\'m');
testBuilder.append('a');
testBuilder.append('string');
testBuilder.append('builder');

console.log(testBuilder.join());
console.log(testBuilder.join(' '));
testBuilder.clear();
console.log(testBuilder.join());
