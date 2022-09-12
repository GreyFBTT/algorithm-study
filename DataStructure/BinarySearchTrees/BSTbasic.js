class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTrees {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {
            if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;

        let current = this.root;
        while (current) {
            if (val > current.val) {
                current = current.right;
            } else if (val < current.val) {
                current = current.left;
            } else {
                return true;
            }
        }

        return false;
    }
}

const tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(2);
console.log(tree.find(10));
