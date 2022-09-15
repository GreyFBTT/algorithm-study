class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let primeNumber = 31;
        for (let i = 0; i < Math.min(100, key.length); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * primeNumber + value) % this.keyMap.length;
        }

        return total;
    }

    // set(key, value) {
    //     let hashedKey = this._hash(key);

    //     if (this.keyMap[hashedKey]) {
    //         this.keyMap[hashedKey] = [...this.keyMap[hashedKey], [key, value]];
    //     } else {
    //         this.keyMap[hashedKey] = [key, value];
    //     }
    //     return this.keyMap;
    // }

    // solution 은 그냥 애초에 빈배열을 다 박아놓고 하나보다.
    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);

        return this.keyMap;
    }

    // get(key) {
    //     let index = this._hash(key);

    //     // index가 0이면 !index 가 true여서 undefined 가 출력된다.
    //     if (!index && index !== 0) return undefined;

    //     for (let item of this.keyMap[index]) {
    //         if (item[0] === key) return item[1];
    //     }
    // }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let item of this.keyMap[index]) {
                if (item[0] === key) {
                    return item[1];
                }
            }
        }

        return undefined;
    }

    keys() {
        let newArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let item of this.keyMap[i]) {
                    newArr.push(item[0]);
                }
            }
        }

        return newArr;
    }

    // key는 유일하지만, value 들은 유일하지 않을 수 있다.
    // 겹치는 값은 한번만 push할 수 있도록 조건을 세워보자.
    values() {
        let newArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let item of this.keyMap[i]) {
                    // newArr = [...newArr, item[1]];
                    if (!newArr.includes(item[1])) {
                        newArr.push(item[1]);
                    }
                }
            }
        }

        return newArr;
    }
}

const hashTable = new HashTable();
hashTable.set("hello world", "pizza");
hashTable.set("dogs", "are cool");
hashTable.set("cats", "are fine");
hashTable.set("i love", "pizza");
console.log(hashTable.values());
// console.log(hashTable);
