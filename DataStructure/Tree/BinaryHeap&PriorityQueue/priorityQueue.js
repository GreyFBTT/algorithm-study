//priority queue as minBinaryHeap

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// priority 가 작을수록 중요도가 높기 떄문에 minBinaryHeap 으로 구현

class PriorityQueue {
    constructor() {
        this.tree = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.tree.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.tree.length - 1;
        const element = this.tree[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentPriority = this.tree[parentIdx].priority;

            if (element.priority >= parentPriority) break;

            this.tree[idx] = this.tree[parentIdx];
            this.tree[parentIdx] = element;
            idx = parentIdx;
        }
    }

    dequeue() {
        const removed = this.tree[0];
        const replace = this.tree[this.tree.length - 1];
        this.tree[0] = replace;
        this.tree.pop();
        this.sinkDown();

        return removed;
    }

    sinkDown() {
        let idx = 0;
        const element = this.tree[idx];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let leftPriority, rightPriority;
            let swapIdx = null;

            if (left < this.tree.length) {
                leftPriority = this.tree[left].priority;
                if (element.priority > leftPriority) {
                    swapIdx = left;
                }
            }

            if (right < this.tree.length) {
                rightPriority = this.tree[right].priority;
                if (
                    (swapIdx === null && element.priority > rightPriority) ||
                    (swapIdx !== null && leftPriority > rightPriority)
                ) {
                    swapIdx = right;
                }
            }

            if (swapIdx === null) break;

            this.tree[idx] = this.tree[swapIdx];
            this.tree[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

// const queue = new PriorityQueue();
// queue.enqueue(1, 2);
// queue.enqueue(1, 1);
// queue.enqueue(1, 3);
// queue.enqueue(1, 5);
// queue.enqueue(1, 6);
// console.log(queue);
// queue.dequeue();
// console.log(queue);

console.log([1, 2, 3]);
