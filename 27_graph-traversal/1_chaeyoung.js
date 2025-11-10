// 그래프 순회
// dfs 재귀, dfs 반복, bfs

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex[v1];
    if (!this.adjacencyList[v2]) this.addVertex[v2];

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList.filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList.filter((v) => v !== v1);
  }

  removeVertex(v1) {
    while (this.adjacencyList[v1].length) {
      removed = this.adjacencyList[v1].pop();
      this.removeEdge(removed, v1);
    }
    delete this.adjacencyList[v1];
  }

  // dfs 재귀
  // 재귀를 활용해서 한 정점에서 깊게 내려가며 탐색
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  // dfs 반복
  // 재귀를 사용하지 않고 명시적 스택으로 구현
  depthFirstIterative(start) {
    let stack = [];
    let result = [];
    let visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      let current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // bfs
  breadthFirst(start) {
    let queue = [start];
    let result = [];
    let visited = {};

    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();

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

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.depthFirstRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.depthFirstIterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.breadthFirst("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
