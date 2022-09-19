// Adjacency List 이용

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        // if(vertex1 && vertex2)
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
    }

    // removeVertex(vertex) {
    //     for (let key in this.adjacencyList) {
    //         if (key !== vertex) this.removeEdge(key, vertex);
    //     }
    //     delete this.adjacencyList[vertex];
    // }

    // solution
    // 원래 코드의 문제점 : 제거하려는 vertex와 연결고리가 없는 vertex들까지 모두 순회하며 확인해야 한다.
    // 따라서 제거할 vertex를 순회하며 연결된 다른 vertex를 확인하여 remove 해준다.
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const remove = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, remove);
        }

        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
g.removeVertex("Hong Kong");

// console.log(g);
