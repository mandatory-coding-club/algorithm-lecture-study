// 다익스트라 알고리즘

// 단순 priority queue
// min-priority로 정렬, 앞에서 부터 꺼내옴
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, finish) {
    const PQ = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // 초기 설정
    // distances: 모든 정점의 거리를 무한대로 초기화
    // previous: 모든 정점의 이전 정점을 null로 초기화
    // PQ: 시작점만 거리 0으로 추가
    for (let vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }

    // 시작점만 PQ에 추가
    distances[start] = 0;
    PQ.enqueue(start, 0);

    // 탐색 시작
    // PQ에서 가장 작은 거리를 가진 노드를 꺼내옴
    while (PQ.values.length) {
      smallest = PQ.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest && distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let nextNode = neighbor;
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            PQ.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
