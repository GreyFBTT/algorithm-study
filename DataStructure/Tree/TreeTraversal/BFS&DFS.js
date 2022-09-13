class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return;
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

    // Breadth-first-search
    BFS() {
        // 배열 메소드를 이용한다.
        let visited = [];
        let queue = [];
        let current = this.root;

        queue.push(current);
        // !queue 는 false다. 빈 배열은 true값을 반환한다.
        // 빈 문자열은 또 false를 return 함
        while (queue.length) {
            current = queue.shift();
            visited.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return visited;
    }

    // Depth-first Search
    DFSPreOrder() {
        let visited = [];
        let current = this.root;

        function helper(current) {
            visited.push(current);
            // 아래 종료 조건이 따로 필요가 없다.
            // 애초에 조건에 따라 재귀로 들어가기 때문에 left, right 값이 없다면 재귀로 들어가지 않고 visited 에 push하고 끝남.
            if (!current.left && !current.right) {
                return;
            }
            if (current.left) helper(current.left);
            if (current.right) helper(current.right);
        }

        helper(current);

        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        let current = this.root;

        function helper(current) {
            if (current.left) helper(current.left);
            if (current.right) helper(current.right);
            visited.push(current);
        }

        helper(current);

        return visited;
    }

    DFSInOrder() {
        let visited = [];
        let current = this.root;

        function helper(current) {
            if (current.left) helper(current.left);
            visited.push(current);
            if (current.right) helper(current.right);
        }

        helper(current);

        return visited;
    }
}

const tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree.DFSInOrder());
