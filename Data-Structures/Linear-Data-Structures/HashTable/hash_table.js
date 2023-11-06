class HashTable {
    constructor() {
        this.hashTable = new Array(127);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;

        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.hashTable.length;
    }

    set(key, value) {
        let index = this._hash(key);

        if(!this.hashTable[index]) {
            this.hashTable[index] = [[key, value]];
        } else {
            for(let i = 0; i < this.hashTable[index].length; i++) {
                if(this.hashTable[index][i][0] === key) {
                    this.hashTable[index][i][1] = value;

                    return;
                }
            }

            this.hashTable[index] = [...this.hashTable[index], [key, value]]
        }

        this.size++;
    }

    get(key) {
        let index = this._hash(key);

        if(!this.hashTable[index]) {
            return 'Key not found';
        }

        for(let i = 0; i < this.hashTable[index].length; i++) {
            if(this.hashTable[index][i][0] === key) {
                return this.hashTable[index][i];
            }
        }
    }

    remove(key) {
        let index = this._hash(key);

        if(!this.hashTable[index]) {
            return 'Key not found';
        }

        let keyIndex = null;

        for(let i = 0; i < this.hashTable[index].length; i++) {
            if(this.hashTable[index][i][0] === key) {
                keyIndex = i;

                break;
            }
        }

        if(keyIndex === null) return 'Key not found';

        this.hashTable[index].splice(keyIndex,1);
        this.size--;
    }

    display() {
        this.hashTable.forEach(table => {
            table.forEach(([key, value]) => {
                console.log(`${key} : ${value}`);
            });
        });
    }
}

const hashTable = new HashTable();
hashTable.set("Canada", 300);
hashTable.set("France", 100);
hashTable.set("Spain", 110);
hashTable.set("ǻ", 192);

console.log(hashTable.get("Canada"));
console.log(hashTable.get("France"));
console.log(hashTable.get("Spain"));

hashTable.display();

hashTable.remove('Spain');

hashTable.display();