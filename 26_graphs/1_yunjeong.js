// 인접리스트 활용한 그래프 구현
// addVertex, addEdge, removeEdge, removeVertex
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // addVertex
  // 1. adjacencyList 변수에 해당 정점 인덱스가 존재하는지 확인
  // 2. 존재하지 않으면, 해당 인덱스에 새 배열 생성
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // addEdge
  // 1. 각 정점에 해당하는 인덱스에, 상대 정점 push
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  // removeEdge
  // 1. 각 정점에 해당하는 인덱스에 저장된 배열을, 상대 정점 제외된 filter된 배열로 교체
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  // removeVertex
  // 1. 삭제되는 정점에 해당하는 인덱스에 저장된 배열 가지고 옴
  // 2. 배열을 순회하면서, removeEdge를 반복
  // 3. 해당 인덱스 자체를 삭제
  removeVertex(vertex) {
    // javascript는 배열의 길이로 falsy 판단하는 거 잊지 말기
    while (this.adjacencyList[vertex].length) {
      let adjacencyVertex = this.adjacencyList[vertex].pop();
      // this 키워드 누락 주의하기
      this.removeEdge(vertex, adjacencyVertex);
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
g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList);
g.removeVertex("Hong Kong");
console.log(g.adjacencyList);
