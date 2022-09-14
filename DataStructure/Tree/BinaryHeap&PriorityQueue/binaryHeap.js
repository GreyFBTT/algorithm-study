class MaxBinaryHeaps {
    constructor() {
        this.tree = [41, 39, 27, 33, 18, 12];
    }

    // insert(val) {
    //     const swap = (arr, idx1, idx2) => {
    //         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    //     };

    //     this.tree.push(val);
    //     let currentIdx = this.tree.length - 1;

    //     while (Math.floor((currentIdx - 1) / 2) >= 0) {
    //         let currentParentIdx = Math.floor((currentIdx - 1) / 2);

    //         if (this.tree[currentIdx] < this.tree[currentParentIdx]) {
    //             break;
    //         } else if (this.tree[currentIdx] > this.tree[currentParentIdx]) {
    //             swap(this.tree, currentIdx, currentParentIdx);
    //             currentIdx = currentParentIdx;
    //         } else {
    //         }
    //     }

    //     return this.tree;
    // }

    insert(val) {
        this.tree.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.tree.length - 1;
        const element = this.tree[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentVal = this.tree[parentIdx];
            if (element <= parentVal) break;

            this.tree[idx] = parentVal;
            this.tree[parentIdx] = element;
            idx = parentIdx;
        }
    }

    extractMax() {
        let removed = this.tree[0];
        this.tree[0] = this.tree[this.tree.length - 1];
        this.tree.pop();
        this.sinkDown();

        console.log(removed);
        return removed;
    }

    // sinkDown() {
    //     let idx = 0;
    //     const element = this.tree[0];

    //     while (true) {
    //         let left = 2 * idx + 1;
    //         let right = 2 * idx + 2;
    //         let leftVal = this.tree[left];
    //         let rightVal = this.tree[right];

    //         if (
    //             (element > leftVal && element > rightVal) ||
    //             (!leftVal && !rightVal) ||
    //             (element > leftVal && rightVal === undefined)
    //         )
    //             break;

    //         if (leftVal > rightVal || rightVal === undefined) {
    //             this.tree[left] = element;
    //             this.tree[idx] = leftVal;
    //             idx = left;
    //         } else {
    //             this.tree[right] = element;
    //             this.tree[idx] = rightVal;
    //             idx = right;
    //         }
    //     }
    // }

    sinkDown() {
        let idx = 0;
        const element = this.tree[0];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let leftVal, rightVal;
            let swapIdx = null;

            if (left < this.tree.length) {
                leftVal = this.tree[left];
                if (leftVal > element) {
                    swapIdx = left;
                }
            }

            if (right < this.tree.length) {
                rightVal = this.tree[right];
                if (
                    (rightVal > element && swapIdx === null) ||
                    (rightVal > leftVal && swapIdx !== null)
                ) {
                    swapIdx = right;
                }
            }

            if (swap === null) break;
            this.tree[idx] = this.tree[swapIdx];
            this.tree[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

const heap = new MaxBinaryHeaps();
// heap.insert(55);
// heap.insert(100);
// console.log("--", heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
