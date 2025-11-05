// 다익스트라 구현
// Binary Heap 활용
// Solution
// 1. 구현에 사용될 Node와 Priority Queue class 먼저 구현
// 2. 다익스트라 구현할 가중치 그래프 클래스 구현
// 3. 시작점에서 각 노드까지의 최단거리와 직전 노드 정보를 저장할 distance, previous 변수 선언
// 4. 모든 노드를 차례로 queue에 삽입 => 우선순위 큐 활용
// 5. 차례로 가져와서 해당 노드의 이웃 노드 확인
// 6. 현재 노드에서 이웃 노드까지 가는 누적 거리 계산
// 7. 계산된 누적 거리가 distance[이웃 노드]보다 짧으면 distance와 previous 갱신
// 8. 큐가 비거나 도착점에 도달할 때까지 반복
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if(this.values.length !== 1) this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    let parentIdx, parentNode;
    while(idx > 0) {
      parentIdx = Math.floor((idx - 1) /2);
      parentNode = this.values[parentIdx];
      if (parentNode.priority < element.priority) break;
      this.values[idx] = parentNode;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    let element = this.values[idx];
    let length = this.values.length;
    let leftChildIdx, leftChild, rightChildIdx, rightChild;
    while(true) {
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((!swap && rightChild.priority < element.priority) || (swap && rightChild.priority < leftChild.priority)) swap = rightChildIdx;
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
  }
  dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let smallest;
    // 초기화
    for(let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // previous 초기화 빠뜨림... => 경로 역추적 시 undfined 문제 발생 가능성
      previous[vertex] = null;
    }
    // 실행
    while(nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest && distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

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

graph.dijkstra("A", "E"); 
// 결과: ["A", "C", "D", "F", "E"]
