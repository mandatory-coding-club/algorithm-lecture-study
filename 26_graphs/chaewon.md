### 들어가기
그래프 : 사용자 추천 엔진 등에 널리 사용한다. 아주 유용하다.
chart를 말하는 건 아니고 노드들이 연결된 데이터 구조를 의미한다.

### 학습 목표
- 그래프가 뭔지 알기
- 다른 자료구조와 비교하기
- 그래프의 사용 예시 보기
- 인접 리스트로 그래프 코딩하기
- BFS DFS로 그래프 순회하기
- 그래프 순회 알고리즘

### 그래프란?
- 그래프는 노드나 노드들의 연결을 모은 것
- 트리는 한 부모를 가졌고 각 부모는 자식을 가짐. 그러나 그래프에는 부모 자식 관계가 없고, 서로 다른 방식으로 연결될 뿐
- 어디에 쓰임?
  - SNS 알 수도 있는 사람....
  - 아마존 당신이 좋아할 것 같은 상품...

### 그래프의 종류
- 방향에 따라
    - 무향 그래프 (양방향 연결, 혹은 연결에 방향이 없음)
    - 유향 그래프 (방향이 있음)

- 가중치에 따라
    - 비가중 그래프 : 각 간선에 부여된 값이 없음
    - 가중 그래프 : 간선에 부여된 값이 있음 (최단 경로 계산 등에 사용)

### 그래프의 저장
- 인접 리스트
    - 노드 번호 index에 다른 노드와의 연결을 저장
0 [1, 5] , 1 [0, 2]
    - 해시 테이블 사용 A:  ["b", "f"]
    - 간선이 많지 않으면 더 적은 공간 차지
    - 모든 간선을 순회하기 쉬움
    - 특정 간선을 찾기 어려움 (A : b, f, c, d, ... 일때 A의 모든 간선을 확인해봐야 함)

- 인접 행렬 : 그래프를 행렬로 저장!
    - 더 많은 공간 차지
    - 모든 간선을 순회하기 어려움
    - 특정 간선을 찾기 쉬움

| 연산            | Adjacency List | Adjacency Matrix |
| :------------ | :------------: | :--------------: |
| 특징 |공간 효율적 (특히 sparse graph일 때) <br> 모든 edge 순회가 빠름 <br> 특정 edge 탐색은 느림|공간 비효율적 (V² 공간 필요) <br> 특정 edge 탐색이 빠름 (O(1))|
| Add Vertex    |      O(1)      |       O(V²)      |
| Add Edge      |      O(1)      |       O(1)       |
| Remove Vertex |    O(V + E)    |       O(V²)      |
| Remove Edge   |      O(E)      |       O(1)       |
| Query         |    O(V + E)    |       O(1)       |
| Storage       |    O(V + E)    |       O(V²)      |

### 왜 인접 리스트를 자세히 배울까요?
사용하는 저장 공간이 적을 뿐더러, 실제로 사용하는 데이터 대부분은 퍼져있는 경우가 더 많음. 정점은 많지만 연결은 적기에 인접 리스트가 더 매력적이다.

데이터가 집약적이라서 간선이 거의 꽉 차있는 경우는 행렬을 쓰는 게 낫다!

### 코드 에제
```js
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
```