class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // 두가지 방법이 있음.
    // 뒤로 추가 앞으로 제거 or 앞으로 추가 뒤로 제거
    // 전자로 구현
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) return undefined;

        let removed = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
            removed.next = null;
        }

        this.size--;
        return removed;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
