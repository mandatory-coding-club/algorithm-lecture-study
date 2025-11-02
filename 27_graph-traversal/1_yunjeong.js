// 깊이 우선 탐색 구현
// 1. 재귀적 구현 2. 반복형 구현
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1] = this.adjacencyList.filter( v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList.filter( v => v !== vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while(this.adjacencyList[vertex].length) {
      let adjacencyNode = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyNode);
    }
    delete this.adjacencyList[vertex];
  }
  // 재귀적 구현
  // 1. 방문 노드를 담을 visited 배열, 결과를 담을 result 배열 선언
  // 2. 해당 노드의 인접리스트를 돌면서 visited를 true로 바꿔주는 헬퍼 함수 선언 
  // 3. start 노드부터 시작
  depthFirstSearchRecursive(start) {
    let result = [], visited = {};
    // 재귀 함수에서는 this 바인딩에 접근하지 못하므로 재귀 함수 밖에 따로 변수로 선언해줘야 함!
    let adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!adjacencyList[vertex]) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(adjacencyNode => {
        if (!visited[adjacencyNode]) dfs(adjacencyNode);
      });
    }
    dfs(start);

    return result;
  }
  // 반복형 구현
  // - stack 형식으로 구현
  // 1. 재귀적 구현과 비슷하지만, 방문할 노드들을 차례로 저장할 stack 배열 함께 생성
  // 2. stack에서 pop() 함수로 노드를 차례로 꺼내와 visited 처리 및 result에 저장
  // 3. 해당 노드의 인접리스트를 순회
  // 4. stack 배열에 저장
  depthFirstSearchIterative(start) {
    let stack = [start];
    let result = [], visited = {};
    // 처음에 시작 노드를 visited 처리하지 않아 중복 처리됨!
    visited[start] = true;
    while(stack.length) {
      let currentNode = stack.pop();
      result.push(currentNode);
      if (this.adjacencyList[currentNode]) {
        this.adjacencyList[currentNode].forEach(adjacencyNode => {
          if (!visited[adjacencyNode]) {
            visited[adjacencyNode] = true;
            stack.push(adjacencyNode);
          }
        });
      }
    }
    
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

g.depthFirstSearchRecursive("A"); // ['A', 'B', 'D', 'E', 'C', 'F']
g.depthFirstSearchIterative("A"); // ['A', 'C', 'E', 'F', 'D', 'B']
