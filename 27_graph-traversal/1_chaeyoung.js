// 그래프 순회
// dfs 재귀, dfs 반복, bfs

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.addVertex[v1];
    if (this.adjacencyList[v2]) this.addVertex[v2];

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
}
