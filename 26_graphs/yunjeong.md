## 그래프

- 노드와 노드들의 연결(간선)의 집합
- 트리와의 차이점
    - 트리의 노드는 `부모-자식` 관계
    - 그래프는 부모-자식 관계가 없고, 서로 다른 방식으로 연결될 뿐
- 실생활 예제
    - sns 연결
    - 지도 길찾기
    - 라우팅 알고리즘
    - 시각적 계층 구조
    - 아마존 당신이 좋아할 것 같은 상품

### 기본 용어

- 정점 (Vertex)
    - 노드
- 간선 (Edge)
- 무향 그래프 (Undirected graph)
    - 양방향 연결, 혹은 연결에 방향이 없음
- 방향 그래프 (Directed graph)
- 비가중 그래프
    - 간선에 가중치가 없는 그래프
- 가중 그래프 (Weighted graph)
    - 간선에 가중치가 있는 그래프
    - 최단 경로 계산 등에 사용

### 그래프 접근법

- 인접 행렬 (Adjacency Matrix)
- 인접 리스트 (Adjacency List)
    - 노드 번호 index에 다른 노드와의 연결을 저장
    - 노드의 값이 숫자가 아닌 경우는?
        - 해시 테이블

### 인접 행렬 VS 인접 리스트

- 인접 리스트
    - 저장 공간은 간선의 개수와 비례
    - 적은 공간 차지 (간선이 많지 않고 퍼져 있는 그래프(희소 그래프)에서 유리)
    - 간선을 순회하기 쉬움
        - 각 정점의 이웃만 확인하면 된다.
    - 특정 간선을 찾기 어려움
- 인접 행렬
    - 저장 공간은 (정점의 개수^2)와 비례
    - 간선을 순회하는데 느림
    - 특정 간선을 찾기 쉬움

| 연산 | 인접 리스트 | 인접 행렬 |
|------|------------|-----------|
| 정점 추가 | `O(1)` | `O(V²)` |
| 간선 추가 | `O(1)` | `O(1)` |
| 정점 삭제 | `O(V + E)` | `O(V²)` |
| 간선 삭제 | `O(E)` | `O(1)` |
| 탐색 | `O(V + E)` | `O(1)` |
| 저장 공간 | `O(V + E)` | `O(V²)` |

`V` - number of vertices  
`E` - number of edges

## 그래프 클래스 구현

- 인접 리스트 활용

```jsx
class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v!== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v!== vertex1
		);
	}
	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
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
g.addEdge("Dallas", "Tokyo");
g.removeEdge("Dallas", "Tokyo");
```
