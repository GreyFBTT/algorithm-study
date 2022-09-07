class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;

        return removed;
    }

    shift() {
        if (!this.head) return undefined;

        let removed = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;

        return removed;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get(idx) {
    //     if (idx < 0 || idx >= this.length) return false;
    //     let tailStart = this.tail;
    //     let tailCount = this.length - 1;
    //     let headStart = this.head;
    //     let headCount = 0;
    //     let middle = Math.floor(this.length / 2);

    //     while (tailCount !== idx && headCount !== idx) {
    //         if (idx > middle) {
    //             tailStart = tailStart.prev;
    //             tailCount--;
    //         } else {
    //             headStart = headStart.next;
    //             headCount++;
    //         }
    //     }

    //     return idx > middle ? tailStart : headStart;
    // }
    get(idx) {
        if (idx < 0 || idx >= this.length) return false;

        if (idx <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(idx, val) {
        let temp = this.get(idx);
        // get을 해왔는지 꼭 확인할 것
        if (temp !== null) {
            temp.val = val;
            return true;
        }

        return false;
    }

    insert(idx, val) {
        const newNode = new Node(val);

        if (idx < 0 || idx > this.lenght) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        const preNode = this.get(idx - 1);
        const nextNode = preNode.next;

        (preNode.next = newNode), (newNode.prev = preNode);
        (newNode.next = nextNode), (nextNode.prev = newNode);

        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.shift();
        if (idx === this.length - 1) return !!this.pop();

        const removed = this.get(idx);
        const preNode = removed.prev;
        const nextNode = removed.next;

        (preNode.next = nextNode), (nextNode.prev = preNode);
        (removed.next = null), (removed.prev = null);

        this.length--;

        return true;
    }

    reverse() {
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        // next => prev
        let nextNode;
        let prevNode = null;
        while (curr) {
            nextNode = curr.next;
            curr.next = prevNode;
            prevNode = curr;
            curr = nextNode;
        }

        // prev => next
        curr = this.head;
        nextNode = null;
        while (curr) {
            prevNode = curr.prev;
            curr.prev = nextNode;
            nextNode = curr;
            curr = prevNode;
        }

        return this;
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.reverse());
