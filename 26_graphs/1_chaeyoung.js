// 그래프 클래스 구현
// adjacency List

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 정점 추가
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // 간선 추가
  // v1 : [v2], v2: [v1] 둘 정점에 모두 추가해야함
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // 간선 제거
  // v1 : [v2], v2: [v1] 둘 정점에 모두 제거해야함
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // 정점 제거
  // 해당 정점에 들어있는 항목들에서 해당 정점 제거해야함
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

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

console.log(g.adjacencyList);
// {
//     Dallas: [ 'Tokyo', 'Aspen', 'Hong Kong' ],
//     Tokyo: [ 'Dallas', 'Hong Kong' ],
//     Aspen: [ 'Dallas', 'Los Angeles' ],
//     'Los Angeles': [ 'Hong Kong', 'Aspen' ],
//     'Hong Kong': [ 'Tokyo', 'Dallas', 'Los Angeles' ]
//   }

g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList);
// {
//     Dallas: [ 'Aspen', 'Hong Kong' ],
//     Tokyo: [ 'Hong Kong' ],
//     Aspen: [ 'Dallas', 'Los Angeles' ],
//     'Los Angeles': [ 'Hong Kong', 'Aspen' ],
//     'Hong Kong': [ 'Tokyo', 'Dallas', 'Los Angeles' ]
//   }

g.removeVertex("Hong Kong");
console.log(g.adjacencyList);
// {
//     Dallas: [ 'Aspen' ],
//     Tokyo: [],
//     Aspen: [ 'Dallas', 'Los Angeles' ],
//     'Los Angeles': [ 'Aspen' ]
//   }
