## 그래프 순회

- 트리는 그래프의 한 종류
- 그래프 순회의 예
    - 네트워크 그래프
    - 웹 크롤링
    - 최단 거리 추천
    - 최단거리 탐색 문제들
        - gps 네비게이션
        - 미로 찾기
        - AI (shortest path to win the game)

## 1. 깊이 우선 순회 (Depth First Search)

- 형제 노드를 방문하기 전에 자식 노드의 끝까지 먼저 방문하는 방식

### DFS 재귀형

- 의사코드

```jsx
DFS(vertex):
	if vertex is empty
		return (this is base case)
	add vertex to results list
	mark vertex as visited
	for each neighbor in vertex's neighbors:
		if neighbor is not visited:
			recursively call DFS on neighbor
```

- 구현

```jsx
depthFirstRecursive(start) {
	const result = [];
	const visited = {};
	const adjacencyList = this.adjacencyList;
	
	(function dfs(vertex) {
		if(!vertex) return null;
		visited[vertex] = true;
		result.push(vertex);
		adjacencyList[vertex].forEach(neighbor => {
			if(!visited[neighbor]) {
				return dfs(neighbor)
			}
		})	
	}) (start);
	return result;
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

g.depthFirstRecursive("A");
```

### DFS 반복형

- 의사코드

```jsx
DFS_iterative(start) : 
	let S be a stack
	S.push(start)
	while S is not empty
		vertex = S.pop()
		if vertex is not labeled as discovered:
			visit vertex (add to result list)
			label vertex as discovered
			for each of vertex's neighbors, N do
				S.push(N)
```

- 구현

```jsx
depthFirstIterative(start) {
	const stack = [start];
	const result = [];
	const visited = {};
	let currentVertex;
	
	visited[start] = true;
	while(stack.length) {
		currentVertex = stack.pop();
		result.push(currentVertex);
		
		this.adjacencyList[currentVertex].forEach(neighbor => {
			if(!visited[neighbor]) {
				visited[neighbor] = true;
				stack.push(neighbor);
			}
		});
	}
	return result;
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

g.depthFirstIterative("A");
```

## 2. 너비 우선 탐색 (Breadth First Search)

- 같은 깊이에 있는 인접점부터 먼저 방문하는 방식
- 의사 코드
    1. 시작점을 매개변수로 받음
    2. 큐 배열을 만들고, 시작 노드를 넣는다.
    3. 방문한 노드를 저장할 result 배열 변수 생성
    4. 이미 방문한 노드들을 저장하기 위한 객체 visited 변수 생성
    5. 시작 노드를 visited 처리
    6. while 루프를 통해 큐를 순회하면서, 큐의 맨 앞 노드를 가져와 result에 담고, 그 인접점들을 큐에 추가

```jsx
breadthFirst(start) {
	const queue = [start];
	const result = [];
	const visited = {};
	let currentVertex;
	visited[start] = true;
	
	while(queue.length) {
		currentVertex = queue.shift();
		result.push(currentVertex);
		
		// 인접점의 좌우 순서 바꾸어서 출력하고 싶을 때,
		// this.adjacencyList[currentVertex].slice().reverse().forEach...
		// .slice()로 복사본 생성 후, .reverse()로 순서 반전
		this.adjacencyList[currentVertex].forEach(neighbor => {
			if(!visited[neighbor]) {
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		});
	}
	return result;
}
```
