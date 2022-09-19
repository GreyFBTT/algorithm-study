class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // 재귀형 DFS ====================================================>
    // 시작점을 받는 함수
    // 경로 결과값 저장할 스토어 생성
    // 방문 상태를 확인할 객체 생성
    // recursive helper method
    // // 종료조건 : 인접한 vertex가 모두 방문완료
    // // 방문하지 않은 vertex가 있을 때 방문하며 경로 추가 (재귀적으로)
    // 결과값 출력
    DFSRecursive(startPoint) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function helper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((e) => {
                if (!visited[e]) {
                    return helper(e);
                }
            });
        }

        helper(startPoint);

        return result;
    }

    // 반복형 DFS ======================================================>
    // 시작점을 받는 함수
    // 결과값 스토어 생성
    // 방문 상태 확인 객체 생성
    // 스택 생성
    // iterative
    // // 스택에서 pop 해온 값에 대한 인접 vertex중 visited 되지 않은 것을 추출하여 다시 스택에 push
    // // 추출값은 result에 push
    // // 스택이 빌 떄까지 반복
    DFSIterative(startPoint) {
        const result = [];
        const visited = {};
        const stack = [];
        let current;

        stack.push(startPoint);
        visited[startPoint] = true;

        while (stack.length) {
            current = stack.pop();
            result.push(current);

            this.adjacencyList[current].forEach((e) => {
                if (!visited[e]) {
                    stack.push(e);
                    visited[e] = true;
                }
            });
        }

        return result;
    }

    // BFS ============================================>
    // iterative DFS 와 유사하게 진행된다.
    // but, stack이 아니라 queue 를 사용

    BFS(startPoint) {
        const result = [];
        const visited = {};
        const queue = [];
        let current;

        queue.push(startPoint);
        visited[startPoint] = true;

        while (queue.length) {
            current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach((e) => {
                if (!visited[e]) {
                    queue.push(e);
                    visited[e] = true;
                }
            });
        }

        return result;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFSIterative("A"));
console.log(g.DFSRecursive("A"));
console.log(g.BFS("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// console.log(g);
