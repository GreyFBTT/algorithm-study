class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // O(1) 의 시간복잡도를 갖기 위해 데이터를 앞쪽에 넣는다. 단일 연결 리스트의 unshift 와 같음.
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (this.size === 0) return undefined;

        let removed = this.first;

        // if (this.size === 1) {
        //     this.first = null;
        //     this.last = null;
        // } else {
        //     this.first = removed.next;
        //     removed.next = null;
        // }

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;
        return removed;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
console.log(stack.pop());
